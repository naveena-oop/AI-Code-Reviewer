# 🔍 AI Code Reviewer

An AI-powered code review tool that analyzes your code and gives instant feedback on bugs, security issues, and best practices.

## 🚀 Live Demo
> Coming soon after deployment

## ✨ Features
- 🤖 AI-powered code analysis using Google Gemini
- 💻 VS Code-like code editor in the browser
- 🌐 Supports Python, JavaScript, TypeScript, Java, C++, Go
- 🐛 Detects bugs and errors
- 🔒 Identifies security vulnerabilities
- ✅ Suggests best practices and refactored code
- 🎨 Clean dark GitHub-style UI

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Monaco Editor
- **Backend:** Python, FastAPI
- **AI:** Google Gemini API
- **Styling:** CSS3

## ⚙️ How to Run Locally

### 1. Clone the repo
```
git clone https://github.com/naveena-oop/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Backend Setup
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```
Create a `.env` file in the backend folder:
```
GEMINI_API_KEY=your_api_key_here
```
Run the backend:
```
uvicorn main:app --reload
```

### 3. Frontend Setup
```
cd frontend
npm install
npm start
```

### 4. Open in browser
Visit `http://localhost:3000`

## 📸 Screenshots
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2ba3e2d1-9ea1-45f5-9181-30d0601e5765" />


## 🤝 Contributing
Pull requests are welcome!

## 📄 License
MIT
