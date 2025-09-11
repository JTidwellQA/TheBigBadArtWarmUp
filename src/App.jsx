import React, { useState } from 'react';
import PromptTable from './components/PromptTable';
import PromptSummary from './components/PromptSummary';

function App() {
  const [prompt, setPrompt] = useState("");

  const addToPrompt = (text) => {
    setPrompt((prev) => prev ? `${prev}, ${text}` : text);
  };

  const generatePrompt = () => {
    setPrompt("Randomly generated prompt from OpenAI...");
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied to clipboard!");
  };

  const searchReference = (query) => {
    window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`, "_blank");
  };

  return (
    <div id="app">
      <h1>The Big Bad Art Warm-Up</h1>
      <div className="container">
        <PromptTable onAddToPrompt={addToPrompt} onSearchReference={searchReference} />
        <PromptSummary prompt={prompt} onGenerate={generatePrompt} onCopy={copyPrompt} />
      </div>
    </div>
  );
}

export default App;
