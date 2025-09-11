import React, { useState, useEffect } from 'react';
import './index.css';

const textures = [
  '/textures/sketch.jpg',
  '/textures/grid.jpg',
  '/textures/canvas.jpg',
  '/textures/dotpaper.jpg',
  '/textures/oldpaper.jpg'
];

function App() {
  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState('');

  useEffect(() => {
    const randomBg = textures[Math.floor(Math.random() * textures.length)];
    setBg(randomBg);
  }, []);

  const getPrompt = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/random-subject');
      const data = await res.json();
      setPrompt(data);
    } catch (err) {
      setPrompt({ category: 'Error', result: 'Could not fetch prompt.' });
    }
    setLoading(false);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <h1 className="title">🖌️ The Big Bad Art Warm-Up</h1>
      <button className="generate-btn" onClick={getPrompt} disabled={loading}>
        {loading ? 'Loading...' : '🎲 Generate Prompt'}
      </button>

      {prompt && (
        <div className="prompt-box">
          <h2>Category: {prompt.category}</h2>
          <p><strong>Prompt:</strong> {prompt.result}</p>
          <a
            className="reference-link"
            href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(prompt.result)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔍 Click for Reference
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
