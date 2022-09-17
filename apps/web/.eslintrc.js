module.exports = {
  extends: ['next/core-web-vitals', 'custom'],
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
