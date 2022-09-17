module.exports = {
  extends: ['next/core-web-vitals', 'custom'],
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  root: true,
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}
