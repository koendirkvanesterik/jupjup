const withTM = require('next-transpile-modules')(['@jupjup/ui'])

module.exports = withTM({
  reactStrictMode: true,
})
