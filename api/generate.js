export default function handler(req, res) {
  const prompts = {
    animal: ["lion", "wolf", "owl", "fox", "bear"],
    medium: ["ink", "watercolor", "digital", "charcoal", "pencil"],
    genre: ["fantasy", "horror", "sci‑fi", "noir", "surreal"],
    character: ["knight", "wizard", "robot", "thief", "dragon rider"]
  };

  const category = req.query.category;
  if (!category || !prompts[category]) {
    res.status(400).json({ error: "Invalid category" });
    return;
  }

  const rand = prompts[category][Math.floor(Math.random() * prompts[category].length)];
  res.status(200).json({ prompt: rand });
}
