import React, { useState } from 'react';
import PromptTable from './components/PromptTable';
import PromptSummary from './components/PromptSummary';

export default function App() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="app-container">
      <h1>The Big Bad Art Warm-Up</h1>
      <div className="main-content">
        <PromptTable setPrompt={setPrompt} />
        <PromptSummary prompt={prompt} setPrompt={setPrompt} />
      </div>
    </div>
  );
}