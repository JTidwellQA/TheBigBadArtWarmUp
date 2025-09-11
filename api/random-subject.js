// /api/random-subject.js
export default async function handler(req, res) {
  const sources = [
    {
      category: 'Character',
      url: 'https://zoo-animal-api.vercel.app/api/animals/rand',
      transform: (data) => data.name,
    },
    {
      category: 'Action',
      url: 'https://www.boredapi.com/api/activity',
      transform: (data) => data.activity,
    },
    {
      category: 'Style',
      url: 'https://api.adviceslip.com/advice',
      transform: (data) => data.slip.advice,
    },
  ];

  const randomSource = sources[Math.floor(Math.random() * sources.length)];

  try {
    const response = await fetch(randomSource.url);
    const data = await response.json();
    const result = randomSource.transform(data);

    res.status(200).json({
      category: randomSource.category,
      result,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch prompt' });
  }
}
