export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const response = await fetch('https://script.google.com/macros/s/AKfycbxatPiM5MgqbIoienXrRpXQ-z3FvUlclvv3mapeqOq5wJtbpRJqOpjhu3S23uwarbCp/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });

  const text = await response.text();
  res.status(200).send(text);
}
