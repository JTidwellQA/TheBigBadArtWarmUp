const state = {
  animal: null,
  medium: null,
  genre: null,
  character: null,
  lighting: null,
  vibe: null,
  emotion: null,
  color: null,
  camera: null,
  franchiseCharacter: null
};

function setResult(category, value) {
  document.getElementById(category + "Result").textContent = value;
}

function buildFinalPrompt(state) {
  const parts = [];
  for (const [category, value] of Object.entries(state)) {
    const checkbox = document.getElementById(`checkbox-${category}`);
    if (checkbox && checkbox.checked && value) {
      // Capitalize the category name nicely
      const label = category.charAt(0).toUpperCase() + category.slice(1);
      parts.push(`${label}: ${value}`);
    }
  }
  return parts.join(" • ");  // using bullets or dots to separate
}

async function handleGenerate(category) {
  try {
    const resp = await fetch(`/api/generate?category=${category}`);
    const data = await resp.json();
    if (data.prompt) {
      state[category] = data.prompt;
      setResult(category, data.prompt);
    } else {
      setResult(category, "No prompt returned");
    }
  } catch (err) {
    console.error("Error fetching prompt:", err);
    setResult(category, "Error generating");
  }
  // After generation, update final prompt
  const final = buildFinalPrompt(state);
  document.getElementById("finalPrompt").textContent = final;
}

window.addEventListener('DOMContentLoaded', () => {
  const categories = Object.keys(state);
  categories.forEach((cat) => {
    const btn = document.getElementById(cat + "Btn");
    if (btn) {
      btn.addEventListener("click", () => handleGenerate(cat));
    }
  });

  // Add listeners for checkbox toggles
  document.querySelectorAll("input[type=checkbox].include").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const final = buildFinalPrompt(state);
      document.getElementById("finalPrompt").textContent = final;
    });
  });

  // Copy prompt
  document.getElementById("copyPrompt").addEventListener("click", () => {
    const text = document.getElementById("finalPrompt").textContent;
    navigator.clipboard.writeText(text);
    alert("Prompt copied!");
  });

  // Search individual category references
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

  // Optionally, initialize final prompt (empty or with any defaults)
  document.getElementById("finalPrompt").textContent = buildFinalPrompt(state);
});
