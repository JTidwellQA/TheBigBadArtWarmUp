const prompts = {
  animal: ["wolf", "lion", "tiger"],
  medium: ["digital", "ink", "pencil"],
  // ... add the rest of your arrays
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    if (!category || !prompts[category]) {
      return new Response(
        JSON.stringify({ error: "Invalid category" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const rand = prompts[category][
      Math.floor(Math.random() * prompts[category].length)
    ];

    return new Response(
      JSON.stringify({ prompt: rand }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("API ERROR:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
