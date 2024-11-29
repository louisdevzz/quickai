'use client';

import { useState } from 'react';
import { Slider } from "@/components/ui/slider";

interface SummaryResponse {
  original_length: number;
  summary: string[];
  summary_length: number;
}

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [maxLength, setMaxLength] = useState([500]);
  const [minLength, setMinLength] = useState([50]);

  const handleSummarize = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: inputText,
          max_length: maxLength[0],
          min_length: minLength[0] 
        }),
      });

      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error('Error summarizing text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(maxLength[0], minLength[0]);

  return (
    <div className="min-h-screen py-8 px-4">
      <header className="max-w-3xl mx-auto mb-8">
        <div className="flex justify-center items-center mb-4 text-center">
          <h1 className="text-2xl font-bold text-center mb-2">
            Tóm Tắt Nội Dung Thông Minh Bằng AI
          </h1>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Chuyển đổi văn bản dài nhanh chóng và chính xác
        </p>
      </header>

      <main className="chat-container">
        {/* Input Section */}
        <div className="mb-6">
          <textarea
            className="w-full h-32 p-3 rounded-lg border border-[var(--border-color)] 
            bg-white resize-none focus:outline-none focus:ring-2 
            focus:ring-black dark:focus:ring-white transition-all"
            placeholder="Nhập văn bản cần tóm tắt vào đây..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          
          {/* Length Control Sliders */}
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Độ dài tối đa: {maxLength[0]} ký tự
              </label>
              <Slider
                value={maxLength}
                onValueChange={setMaxLength}
                max={1000}
                min={100}
                step={50}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Độ dài tối thiểu: {minLength[0]} ký tự
              </label>
              <Slider
                value={minLength}
                onValueChange={setMinLength}
                max={maxLength[0] - 50}
                min={30}
                step={10}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button 
              className="primary-button"
              onClick={handleSummarize}
              disabled={isLoading || !inputText.trim()}
            >
              {isLoading ? 'Đang xử lý...' : 'Tóm Tắt'}
            </button>
          </div>
        </div>

        {/* Summary Section */}
        {summary && (
          <div className="summary-box">
            <h2 className="font-semibold mb-3">Bản Tóm Tắt</h2>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              {summary.summary}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Độ dài ban đầu: {summary.original_length} ký tự</p>
              <p>Độ dài tóm tắt: {summary.summary_length} ký tự</p>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-3xl mx-auto mt-8 text-center text-sm text-gray-500">
        <p>© 2024 QuickAI. Mọi quyền được bảo lưu.</p>
      </footer>
    </div>
  );
}
