import React, { useState } from 'react';
import './index.css';

function App() {
  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPrompt = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/random-subject');
      const data = await res.json();
      setPrompt(`${data.category}: ${data.result}`);
    } catch {
      setPrompt('Error fetching prompt.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>The Big Bad Art Warm-Up</h1>
      <button onClick={getPrompt} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Prompt'}
      </button>
      {prompt && <div className="prompt-output">{prompt}</div>}
    </div>
  );
}

export default App;
