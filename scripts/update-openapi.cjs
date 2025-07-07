const fs = require('fs');
const https = require('https');
const path = require('path');

const OUT_DIR = path.resolve(__dirname, '../');
const OUT_FILE = path.join(OUT_DIR, 'openapi.json');
const URL = 'https://api.stellarcarbon.io/openapi.json';

https.get(URL, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to fetch spec: ${res.statusCode}`);
    process.exit(1);
  }
  let body = '';
  res.on('data', chunk => (body += chunk));
  res.on('end', () => {
    try {
      fs.mkdirSync(OUT_DIR, { recursive: true });
      fs.writeFileSync(OUT_FILE, body);
      console.log(`✔️  Wrote updated schema to ${OUT_FILE}`);
    } catch (err) {
      console.error(`Error writing file: ${err}`);
      process.exit(1);
    }
  });
}).on('error', err => {
  console.error(`Request error: ${err}`);
  process.exit(1);
});