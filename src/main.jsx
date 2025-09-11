// src/main.js
//import './style.css';

const categories = ['animal', 'medium', 'genre', 'character'];

categories.forEach((cat) => {
  const btn = document.getElementById(`${cat}-generate`);
  const display = document.getElementById(`${cat}-display`);

  if (btn && display) {
    btn.addEventListener('click', async () => {
      try {
        const res = await fetch(`/api/generate?category=${cat}`);
        const data = await res.json();
        display.textContent = data.prompt;
      } catch (err) {
        display.textContent = 'Error generating prompt.';
        console.error(err);
      }
    });
  }
});

const promptOutput = document.getElementById('promptOutput');

window.addToPrompt = function (text) {
  if (promptOutput.textContent.includes('Your prompt will appear')) {
    promptOutput.textContent = '';
  }
  promptOutput.textContent += text + ', ';
};

window.copyPrompt = function () {
  navigator.clipboard.writeText(promptOutput.textContent);
  alert('Prompt copied to clipboard!');
};

window.searchReference = function (query) {
  const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
};
