import React from 'react';

const PromptSummary = ({ prompt, onGenerate, onCopy }) => (
  <div className="right-summary">
    <h2>Prompt Summary</h2>
    <div className="prompt-box">{prompt || "Your prompt will appear here..."}</div>
    <br />
    <button onClick={onGenerate}>Regenerate</button>
    <button onClick={onCopy}>Copy</button>
  </div>
);

export default PromptSummary;
