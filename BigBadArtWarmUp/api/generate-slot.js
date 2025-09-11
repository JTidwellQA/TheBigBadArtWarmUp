export default async function handler(req, res) {
  const category = req.query.category || "random art prompt";
  const prompt = `Give me a completely random, creative ${category} for an artist to draw.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || "Try again!";
  res.status(200).json({ prompt: result });
}