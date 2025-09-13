const prompts = {
  animal: ["wolf", "lion", "tiger"],
  medium: ["digital", "ink", "pencil"],
  // add other categories here...
};

export default async function handler(req) {
  try {
    console.log("📩 Incoming request:", req.url);

    const url = new URL(req.url);
    const category = url.searchParams.get("category");

    console.log("👉 Requested category:", category);

    if (!category || !prompts[category]) {
      console.warn("⚠️ Invalid category:", category);
      return new Response(
        JSON.stringify({ error: "Invalid category", category }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const rand =
      prompts[category][Math.floor(Math.random() * prompts[category].length)];

    console.log(`✅ Generated prompt for [${category}]:`, rand);

    return new Response(JSON.stringify({ prompt: rand }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("💥 API ERROR:", err);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: err.message,
        stack: err.stack,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
