// api/generate.js

const prompts = {
  animal: ["wolf", "lion", "tiger"],
  medium: ["digital", "ink", "pencil"],
  // ...rest of your arrays
};

export default async function handler(req, res) {
  try {
    console.log("Incoming request query:", req.query); // 🔍 Debugging

    const { category } = req.query;

    if (!category || !prompts[category]) {
      console.warn("Invalid category requested:", category); // 🔍 Debugging
      res.status(400).json({ error: "Invalid category", category });
      return;
    }

    const rand =
      prompts[category][Math.floor(Math.random() * prompts[category].length)];

    console.log(`Generated prompt for ${category}:`, rand); // 🔍 Debugging

    res.status(200).json({ prompt: rand });
  } catch (err) {
    console.error("API ERROR (detailed):", err); // 🔍 Debugging
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message,
      stack: err.stack, // 🔍 Include stack trace
    });
  }
}
