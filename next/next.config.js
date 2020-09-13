// yarn add @zeit/next-typescript @types/next
const withTypescript = require("@zeit/next-typescript");
// yarn add @zeit/next-sass node-sass
const withSass = require("@zeit/next-sass");

module.exports = withTypescript({
  webpack(config, options) {
    return config;
  },
});
module.exports = withSass({});
