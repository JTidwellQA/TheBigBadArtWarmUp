function handler(req, res) {
  const prompts = {
    "animal": [
      "wolf", "lion", "tiger", "bear", "fox", "owl", "eagle", "panther", "raven", "bat",
      "deer", "shark", "dolphin", "whale", "cat", "dog", "lizard", "gecko", "spider", "jellyfish"
      // ... keep the rest of your list here ...
    ],
    "medium": [
      "digital", "ink", "pencil", "charcoal", "watercolor", "acrylic", "oil paint", "vector"
      // ...
    ],
    "genre": [
      "fantasy", "sci-fi", "horror", "noir", "surreal", "abstract"
      // ...
    ],
    "character": [
      "knight", "wizard", "witch", "robot", "cyborg", "android"
      // ...
    ],
    "creature": [
      "Dragon", "Wyvern", "Hydra", "Griffin", "Phoenix", "Basilisk", "Chimera"
      // ...
    ],
    "environment": [
      "Ancient forest", "Dense jungle", "Bamboo grove", "Haunted woods", "Misty swamp"
      // ...
    ],
    "lighting": [
      "harsh spotlight", "neon glow", "warm sunset", "cool moonlight"
      // ...
    ],
    "vibe": [
      "eerie", "peaceful", "chaotic", "dreamy", "surreal"
      // ...
    ],
    "emotion": [
      "anger", "joy", "fear", "sadness", "excitement"
      // ...
    ],
    "color": [
      "monochrome", "complementary", "analogous", "neon", "pastel"
      // ...
    ],
    "camera": [
      "wide angle", "close-up", "extreme close-up", "low angle", "high angle"
      // ...
    ],
    "franchiseCharacter": [
      "Spider-Man", "Miles Morales", "Superman", "Batman", "Wonder Woman"
      // ...
    ]
  };

  const category = req.query.category;

  if (!category || !prompts[category]) {
    res.status(400).json({ error: "Invalid category" });
    return;
  }

  const rand = prompts[category][Math.floor(Math.random() * prompts[category].length)];
  res.status(200).json({ prompt: rand });
}

module.exports = handler;
