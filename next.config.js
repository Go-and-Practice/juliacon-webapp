const webpack = require("webpack");

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.unshift(
      new webpack.DefinePlugin({
        __SERVER__: isServer,
      })
    );

    // Because of reasons, Webpack doesn't seem to be able to properly eliminate
    // dead code that does dynamic imports within the project (i.e., it will
    // still try to bundle the dynamically imported code and inevitably fail
    // when it tries to load the `fs` module or something similar). Everything
    // in apollo-server is only used on the server side, so we can get around
    // this by just ignoring any apollo-server imports for the frontend bundle.
    if (!isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /apollo-server/,
        })
      );
    }
    return config;
  },
};
