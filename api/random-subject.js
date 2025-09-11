// /api/random-subject.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://zoo-animal-api.vercel.app/api/animals/rand');
    const data = await response.json();
    res.status(200).json({ type: 'Animal', value: data.name || 'Mystery Creature' });
  } catch {
    res.status(500).json({ error: 'Failed to fetch animal' });
  }
}
