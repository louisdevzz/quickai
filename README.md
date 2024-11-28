# Quick AI Chat

Quick AI is a Vietnamese text summarization application built with Python FastAPI and Next.js.

## Features

- 🚀 Fast text summarization
- 📄 Support multiple summary lengths
- 🎨 Clean and intuitive UI
- ⚡ Optimized performance

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/louisdevzz/quickai.git
cd quickai
```

2. Download available model:
```bash
chmod +x download_model.sh
./download_model.sh
```
If you want to use another model, you can open the backend folder and use your data to train the model again. Please read the model.py file to change the data file name to your data file name. After run file main.py to train the model.

3. Run API by docker:

start by run.sh:
```bash
chmod +x run.sh
./run.sh
#or
sudo docker-compose up -d 
sudo docker-compose logs -f
```
stop by stop.sh:
```bash
chmod +x stop.sh
./stop.sh
#or
sudo docker-compose down
```
4. Install frontend dependencies and start the application:
```bash
cd frontend
npm install
npm run dev
```
5. Open your browser and navigate to `http://localhost:3000`

## Development

- Frontend: React with Vite
- Backend: Python FastAPI
- Styling: Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.