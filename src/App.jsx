// src/App.jsx
import React, { useState } from "react";
import "./index.css";

const categories = [
  "Creature", "Character", "Pose", "Animal", "Environment", "Object", "Machine", "Hybrid"
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Creature");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPrompt = async () => {
    setLoading(true);
    setGeneratedPrompt("");
    try {
      const response = await fetch(`/api/generate-prompt?category=${encodeURIComponent(selectedCategory)}`);
      const data = await response.json();
      setGeneratedPrompt(data.result);
    } catch (err) {
      setGeneratedPrompt("Error fetching prompt.");
    } finally {
      setLoading(false);
    }
  };

  const getGoogleImageLink = (query) => {
    return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="app-container">
      <h1 className="title">🎨 The Big Bad Art Warm-Up</h1>

      <div className="content-grid">
        <div className="left-panel">
          <label htmlFor="category-select">Choose a Category:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>

          <button className="generate-btn" onClick={fetchPrompt} disabled={loading}>
            {loading ? "Generating..." : "🎲 Generate Prompt"}
          </button>

          {generatedPrompt && (
            <a
              className="reference-link"
              href={getGoogleImageLink(generatedPrompt)}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔍 Click for Reference
            </a>
          )}
        </div>

        <div className="right-panel">
          <h2>🖌️ Prompt:</h2>
          <div className="prompt-box">
            {generatedPrompt || (loading ? "Fetching..." : "Your prompt will appear here.")}
          </div>
        </div>
      </div>
    </div>
  );
}
