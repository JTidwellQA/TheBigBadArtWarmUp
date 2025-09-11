import React from 'react';
import PromptButton from './PromptButton';

const PromptTable = ({ onAddToPrompt, onSearchReference }) => {
  const categories = [
    { label: "Subject", placeholder: "Animal, object, creature" },
    { label: "Method", placeholder: "Pencil, charcoal, watercolor" },
    { label: "Genre", placeholder: "Fantasy, sci-fi, noir" },
    { label: "Character", placeholder: "Hero, villain, sidekick" }
  ];

  return (
    <div className="left-table">
      <table>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index}>
              <td><strong>{cat.label}:</strong> {cat.placeholder}</td>
              <td><PromptButton label="Generate" category={cat.label} onAdd={onAddToPrompt} /></td>
              <td><button onClick={() => onSearchReference(cat.placeholder)}>Click for Reference</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PromptTable;
