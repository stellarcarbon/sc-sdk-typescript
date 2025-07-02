import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAPI_URL = 'https://api.stellarcarbon.io/openapi.json';

async function syncVersion() {
  const res = await fetch(OPENAPI_URL);
  if (!res.ok) {
    console.error(`Failed to fetch OpenAPI spec: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const openapi = await res.json();

  // 4. Read & update package.json
  const pkgPath = path.resolve(__dirname, '../package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = openapi.info.version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

  console.log(`Synced version to ${pkg.version}`);
}

syncVersion().catch(err => {
  console.error(err);
  process.exit(1);
});

