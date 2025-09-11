const state = {
  animal: null,
  medium: null,
  genre: null,
  character: null
};

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

async function handleGenerate(category) {
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
  document.getElementById("animalBtn").addEventListener("click", () => handleGenerate("animal"));
  document.getElementById("mediumBtn").addEventListener("click", () => handleGenerate("medium"));
  document.getElementById("genreBtn").addEventListener("click", () => handleGenerate("genre"));
  document.getElementById("characterBtn").addEventListener("click", () => handleGenerate("character"));

  document.getElementById("copyPrompt").addEventListener("click", () => {
    const text = document.getElementById("finalPrompt").textContent;
    navigator.clipboard.writeText(text);
    alert("Prompt copied!");
  });

  // Add individual search buttons for each category
  document.querySelectorAll(".searchBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      const value = state[type];
      if (value) {
        window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(value)}`, "_blank");
      } else {
        alert(`Please generate a ${type} first.`);
      }
    });
  });
});
