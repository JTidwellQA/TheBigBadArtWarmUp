const prompts = {
  animal: ["wolf", "lion", "tiger"], // ... rest of your arrays
  medium: ["digital", "ink", "pencil"],
  // etc...
};

export default function handler(req, res) {
  try {
    const { category } = req.query;

    if (!category || !prompts[category]) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const rand = prompts[category][
      Math.floor(Math.random() * prompts[category].length)
    ];

    return res.status(200).json({ prompt: rand });
  } catch (err) {
    console.error("API ERROR:", err);
    return res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
}
