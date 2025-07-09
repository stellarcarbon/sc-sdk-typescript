import { defineConfig, UserConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.stellarcarbon.io/openapi.json',
  output: 'src/generated',
  parser: {
    filters: {
      deprecated: false,
    },
  },
} as UserConfig);