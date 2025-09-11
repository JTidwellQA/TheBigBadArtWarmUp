// /api/random-subject.js
export default async function handler(req, res) {
  try {
    const resp = await fetch('https://zoo-animal-api.vercel.app/api/animals/rand');
    const data = await resp.json();
    res.status(200).json({ category: 'Animal', result: data.name || 'Creature' });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch subject' });
  }
}
