import React from 'react';

const PromptCategory = ({ category, onSearch, onAdd }) => (
  <tr>
    <td><strong>{category.label}:</strong> {category.value}</td>
    <td><button onClick={() => onSearch(category.value)}>Click for Reference</button></td>
    <td><button onClick={() => onAdd(category.prompt)}>Add to Prompt</button></td>
  </tr>
);

export default PromptCategory;