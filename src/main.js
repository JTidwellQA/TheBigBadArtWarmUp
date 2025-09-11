// src/main.js

// utility to update one category display
function setResult(category, value) {
  document.getElementById(category + "Result").textContent = value;
}

function buildFinalPrompt(state) {
  const { animal, medium, genre, character } = state;
  if (animal && medium && genre && character) {
    return `Draw a ${genre} scene in ${medium} medium featuring ${character}, inspired by ${animal}.`;
  }
  return "";
}

async function handleGenerate(category, state) {
  try {
    const resp = await fetch(`/api/generate?category=${category}`);
    const data = await resp.json();
    if (data.prompt) {
      state[category] = data.prompt;
      setResult(category, data.prompt);
      const final = buildFinalPrompt(state);
      document.getElementById("finalPrompt").textContent = final;
    } else {
      setResult(category, "No prompt returned");
    }
  } catch (err) {
    console.error("Error fetching prompt:", err);
    setResult(category, "Error generating");
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const state = {};
  document.getElementById("animalBtn").addEventListener("click", () => handleGenerate("animal", state));
  document.getElementById("mediumBtn").addEventListener("click", () => handleGenerate("medium", state));
  document.getElementById("genreBtn").addEventListener("click", () => handleGenerate("genre", state));
  document.getElementById("characterBtn").addEventListener("click", () => handleGenerate("character", state));

  document.getElementById("copyPrompt").addEventListener("click", () => {
    const text = document.getElementById("finalPrompt").textContent;
    navigator.clipboard.writeText(text);
    alert("Prompt copied!");
  });

  document.getElementById("searchPrompt").addEventListener("click", () => {
    const text = document.getElementById("finalPrompt").textContent;
    if (text) {
      window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(text)}`, "_blank");
    }
  });
});
