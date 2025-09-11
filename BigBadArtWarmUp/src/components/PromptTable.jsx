import React from 'react';

export default function PromptTable({ setPrompt }) {
  async function fetchPrompt(category) {
    const res = await fetch(`/api/generate-slot.js?category=${encodeURIComponent(category)}`);
    const data = await res.json();
    setPrompt(prev => prev ? prev + ', ' + data.prompt : data.prompt);
  }

  return (
    <div className="table-box">
      <table>
        <tbody>
          {['subject', 'method', 'genre', 'character'].map((cat, idx) => (
            <tr key={idx}>
              <td><strong>{cat.toUpperCase()}:</strong></td>
              <td><button onClick={() => fetchPrompt(cat)}>Generate</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}