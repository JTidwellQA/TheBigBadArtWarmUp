import React from 'react';

const PromptButton = ({ label, category, onAdd }) => {
  const handleClick = async () => {
    const response = await fetch(`/api/generate?category=${category}`);
    const data = await response.json();
    onAdd(data.result);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default PromptButton;
