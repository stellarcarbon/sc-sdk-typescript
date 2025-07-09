// scripts/sync-version.cjs
const fs = require('fs');
const path = require('path');

async function syncVersion() {
  const specPath = path.resolve(__dirname, '../openapi.json');
  if (!fs.existsSync(specPath)) {
    console.error(`OpenAPI spec not found at ${specPath}`);
    process.exit(1);
  }

  const openapi = JSON.parse(fs.readFileSync(specPath, 'utf-8'));
  if (!openapi.info || !openapi.info.version) {
    console.error(`Version field missing in openapi.json`);
    process.exit(1);
  }

  const pkgPath = path.resolve(__dirname, '../package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
//   pkg.version = openapi.info.version;
  pkg.version = '0.1.1'
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

  console.log(`Synced package.json version → ${pkg.version}`);
}

syncVersion().catch(err => {
  console.error(err);
  process.exit(1);
});