export default async function handler(req, res) {
  const { category } = req.query;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "Missing OpenAI API key" });
  }

  try {
    const prompt = `Give me a single, short, creative art warm-up drawing prompt in the "${category}" category. It should be original and imaginative, 5-12 words long. Just return the prompt only.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 50,
        temperature: 0.9
      })
    });

    const data = await response.json();
    const message = data?.choices?.[0]?.message?.content?.trim();

    if (!message) {
      return res.status(500).json({ error: "Failed to generate prompt" });
    }

    return res.status(200).json({ category, result: message });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}
