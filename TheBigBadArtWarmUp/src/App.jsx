import React, { useState } from 'react';
import PromptCategory from './components/PromptCategory';
import './index.css';

function App() {
  const [promptText, setPromptText] = useState('Your prompt will appear here...');

  const categories = [
    { label: 'Subject', value: 'Red Panda', prompt: 'Red Panda' },
    { label: 'Method', value: 'Traditional Ink', prompt: 'using traditional ink' },
    { label: 'Genre', value: 'Cyberpunk', prompt: 'in a cyberpunk style' },
    { label: 'Character', value: 'Spider-Man', prompt: 'featuring Spider-Man' }
  ];

  const searchReference = (query) => {
    const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  const addToPrompt = (text) => {
    setPromptText(prev => prev.includes('Your prompt will appear') ? text + ', ' : prev + text + ', ');
  };

  const generatePrompt = () => {
    const examples = [
      'Draw a cat wizard in a fantasy tavern using colored pencils.',
      'Sketch a cyberpunk frog in Tokyo with digital brushes.',
      'Illustrate a heroic squirrel in a dramatic Marvel pose using ink.',
    ];
    setPromptText(examples[Math.floor(Math.random() * examples.length)]);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(promptText);
    alert('Prompt copied to clipboard!');
  };

  return (
    <div id="app">
      <h1>The Big Bad Art Warm-Up</h1>
      <div className="container">
        <div className="left-table">
          <table>
            <tbody>
              {categories.map((cat, i) => (
                <PromptCategory
                  key={i}
                  category={cat}
                  onSearch={searchReference}
                  onAdd={addToPrompt}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="right-summary">
          <h2>Prompt Summary</h2>
          <div id="promptOutput" className="prompt-box">{promptText}</div>
          <br />
          <button onClick={generatePrompt}>Generate</button>
          <button onClick={copyPrompt}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;