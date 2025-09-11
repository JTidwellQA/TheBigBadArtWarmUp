export default function handler(req, res) {
  const prompts = {
    animal: ["lion", "wolf", "octopus", "eagle", "tiger"],
    medium: ["charcoal", "oil paint", "digital", "ink", "watercolor"],
    genre: ["sci-fi", "fantasy", "noir", "cyberpunk", "surrealism"],
    character: ["a wise old warrior", "a lost child", "a mysterious traveler", "a robot with emotions", "a beast with a heart"]
  };
  const result = {};
  for (const key in prompts) {
    const items = prompts[key];
    result[key] = items[Math.floor(Math.random() * items.length)];
  }
  res.status(200).json(result);
}
