import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // { ignores: ['coverage/**', 'dist/**'], },

  // Add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],

  {
    name: 'custom-rules',
    files: ['**/*.astro', '**/*.ts', '**/*.js', '**/*.mjs'],
    rules: {
      // Override / add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
