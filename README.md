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
2. Run API by docker:

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
3. Install frontend dependencies and start the application:
```bash
cd frontend
npm install
npm run dev
```
4. Open your browser and navigate to `http://localhost:3000`

## Development

- Frontend: React with Vite
- Backend: Python FastAPI
- Styling: Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.