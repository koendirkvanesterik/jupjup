module.exports = {
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-css-modules-preset',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
      },
    },
  }),
}
