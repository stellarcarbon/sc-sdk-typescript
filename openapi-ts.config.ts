import { defineConfig, UserConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.stellarcarbon.io/openapi.json',
  output: 'src/generated',
  parser: {
    filters: {
      deprecated: false,
    },
  },
  plugins: [
    ...defaultPlugins,
    {
      name: '@hey-api/schemas',
      type: 'json', 
    },
  ]
} as UserConfig);