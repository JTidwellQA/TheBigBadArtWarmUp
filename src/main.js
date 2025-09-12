const categories = [
  "animal", "medium", "genre", "character", "creature", "environment",
  "lighting", "vibe", "emotion", "color", "camera", "franchiseCharacter"
];

const state = {};
categories.forEach(cat => state[cat] = null);

function setResult(category, value) {
  document.getElementById(category + "Result").textContent = value;
}

function buildFinalPrompt() {
  const selected = categories.filter(cat => {
    const checkbox = document.getElementById(cat + "Check");
    return checkbox && checkbox.checked && state[cat];
  });

  const lines = selected.map(cat => `${capitalize(cat)}: ${state[cat]}`);
  document.getElementById("finalPrompt").textContent = lines.join("\n");
}

function capitalize(word) {
  return word.replace(/([A-Z])/g, ' $1')
             .replace(/^./, str => str.toUpperCase());
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
    buildFinalPrompt();
  } catch (err) {
    console.error("Error fetching prompt:", err);
    setResult(category, "Error generating");
  }
}

async function handleGenerateAll() {
  await Promise.all(categories.map(async (cat) => {
    const resp = await fetch(`/api/generate?category=${cat}`);
    const data = await resp.json();
    if (data.prompt) {
      state[cat] = data.prompt;
      setResult(cat, data.prompt);
    } else {
      setResult(cat, "No prompt returned");
    }
  }));
  buildFinalPrompt();
}

function clearAll() {
  categories.forEach(cat => {
    state[cat] = null;
    setResult(cat, "-");
    const checkbox = document.getElementById(cat + "Check");
    if (checkbox) checkbox.checked = false;
  });
  document.getElementById("finalPrompt").textContent = "Your final prompt will appear here.";
}

window.addEventListener('DOMContentLoaded', () => {
  categories.forEach(cat => {
    const btn = document.getElementById(cat + "Btn");
    if (btn) {
      btn.addEventListener("click", () => handleGenerate(cat));
    }

    const checkbox = document.getElementById(cat + "Check");
    if (checkbox) {
      checkbox.addEventListener("change", buildFinalPrompt);
    }
  });

  let allSelected = true; // ✅ start true because all checkboxes start checked

  document.getElementById("toggleSelectAllBtn").addEventListener("click", () => {
    allSelected = !allSelected;

    categories.forEach(cat => {
      const checkbox = document.getElementById(cat + "Check");
      if (checkbox) {
        checkbox.checked = allSelected;
      }
    });

    // Update button text
    document.getElementById("toggleSelectAllBtn").textContent = allSelected ? "Unselect All" : "Select All";

    // Update final prompt immediately
    buildFinalPrompt();
  });

  document.getElementById("generateAllBtn").addEventListener("click", handleGenerateAll);
  document.getElementById("clearAllBtn").addEventListener("click", clearAll);

  document.getElementById("copyPrompt").addEventListener("click", () => {
    const text = document.getElementById("finalPrompt").textContent;
    navigator.clipboard.writeText(text);
    alert("Prompt copied!");
  });

  document.querySelectorAll(".searchBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      const value = state[type];
      if (value) {
        const label = capitalize(type);
        const searchQuery = `${label}: ${value}`;
        window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`, "_blank");
      } else {
        alert(`Please generate a ${type} first.`);
      }
    });
  });
});
