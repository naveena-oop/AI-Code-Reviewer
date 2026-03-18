import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import "./App.css";

const LANGUAGES = ["python", "javascript", "typescript", "java", "cpp", "go"];

function App() {
  const [code, setCode] = useState("// Paste your code here");
  const [language, setLanguage] = useState("javascript");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/review", {
        code,
        language,
      });
      setReview(res.data.review);
    } catch (err) {
      setReview("Error fetching review. Make sure backend is running.");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>AI Code Reviewer</h1>
      <div className="controls">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          {LANGUAGES.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <button onClick={handleReview} disabled={loading}>
          {loading ? "Reviewing..." : "Review Code"}
        </button>
      </div>
      <div className="editor-section">
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={(val) => setCode(val || "")}
          theme="vs-dark"
        />
      </div>
      {review && (
        <div className="review-box">
          <h2>Review Result</h2>
          <pre>{review}</pre>
        </div>
      )}
    </div>
  );
}

export default App;