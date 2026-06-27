export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const url = new URL('https://script.google.com/macros/s/AKfycbyOiese7jUrss-xxMHL5CxQ01RBrwxOO2dc7DVhJBkk3FNOe5QVT2-9Kkr204Zo4zYb/exec');
  url.searchParams.set('data', JSON.stringify(req.body));

  const response = await fetch(url.toString(), {
    method: 'GET',
    redirect: 'follow'
  });

  const text = await response.text();
  res.status(200).send(text);
}
