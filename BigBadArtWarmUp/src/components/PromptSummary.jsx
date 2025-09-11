import React from 'react';

export default function PromptSummary({ prompt, setPrompt }) {
  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied to clipboard!");
  }

  return (
    <div className="summary-box">
      <h2>Prompt Summary</h2>
      <div style={{ minHeight: "100px", border: "1px dashed #ccc", padding: "10px" }}>
        {prompt || "Your prompt will appear here..."}
      </div>
      <br />
      <button onClick={() => setPrompt('')}>Regenerate</button>
      <button onClick={copyPrompt}>Copy</button>
    </div>
  );
}