const withTM = require('next-transpile-modules')(['@jj/ui'])

module.exports = withTM({
  reactStrictMode: true,
})
