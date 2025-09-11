import React, { useState } from 'react';
import './index.css';

function App() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const categories = ['Character', 'Action', 'Style'];
    const fetchedPrompts = [];

    for (let i = 0; i < categories.length; i++) {
      try {
        const response = await fetch('/api/random-subject');
        const data = await response.json();
        fetchedPrompts.push(data);
      } catch (err) {
        fetchedPrompts.push({ category: categories[i], result: 'Error loading' });
      }
    }

    setPrompts(fetchedPrompts);
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>The Big Bad Art Warm-Up</h1>
      <button className="generate-button" onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Prompt'}
      </button>
      <div className="prompt-table">
        {prompts.map((item, index) => (
          <div key={index} className="prompt-row">
            <div className="prompt-category">{item.category}</div>
            <div className="prompt-value">{item.result}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
