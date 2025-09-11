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
  const {
    animal, medium, genre, character,
    lighting, vibe, emotion, color, camera, franchiseCharacter
  } = state;

  // Only generate final prompt if all categories are selected
  if (animal && medium && genre && character && lighting && vibe && emotion && color && camera && franchiseCharacter) {
    return `🎨 Draw a ${emotion} ${genre} scene using ${medium}, featuring a ${character} and ${franchiseCharacter}, inspired by a ${animal}. 
Lighting: ${lighting}, Vibe: ${vibe}, Color Palette: ${color}, Camera Style: ${camera}.`;
  }

  return "Complete all prompts to generate a full art challenge.";
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
  // Add generate button listeners for all categories
  const categories = Object.keys(state);
  categories.forEach((cat) => {
    const btn = document.getElementById(cat + "Btn");
    if (btn) {
      btn.addEventListener("click", () => handleGenerate(cat));
    }
  });

  document.getElementById("copyPrompt").addEventListener("click", () => {
    const text = document.getElementById("finalPrompt").textContent;
    navigator.clipboard.writeText(text);
    alert("Prompt copied!");
  });

  // Add search buttons for each category
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
