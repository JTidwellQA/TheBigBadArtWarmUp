document.getElementById('animalBtn').addEventListener('click', () => fetchPrompt('animal'));
document.getElementById('mediumBtn').addEventListener('click', () => fetchPrompt('medium'));
document.getElementById('genreBtn').addEventListener('click', () => fetchPrompt('genre'));
document.getElementById('characterBtn').addEventListener('click', () => fetchPrompt('character'));
document.getElementById('copyPrompt').addEventListener('click', copyPrompt);
document.getElementById('searchPrompt').addEventListener('click', searchPrompt);

let currentPrompt = {};

async function fetchPrompt(category) {
  const res = await fetch('/api/generate');
  const data = await res.json();
  document.getElementById(category + 'Result').textContent = data[category];
  currentPrompt[category] = data[category];
  buildFinalPrompt();
}

function buildFinalPrompt() {
  const { animal, medium, genre, character } = currentPrompt;
  if (animal && medium && genre && character) {
    const prompt = `Draw a ${genre} piece in ${medium} featuring ${character} with a spirit of a ${animal}.`;
    document.getElementById('finalPrompt').textContent = prompt;
  }
}

function copyPrompt() {
  navigator.clipboard.writeText(document.getElementById('finalPrompt').textContent);
}

function searchPrompt() {
  const text = document.getElementById('finalPrompt').textContent;
  window.open(`https://www.google.com/search?q=${encodeURIComponent(text)} reference`, '_blank');
}
