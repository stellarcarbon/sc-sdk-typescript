import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.stellarcarbon.io/openapi.json',
  output: 'src/',
  parser: { 
    filters: { 
      deprecated: false, 
    }, 
  },
});
