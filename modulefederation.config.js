const deps = require("./package.json").dependencies;

module.exports = {
  name: 'host',
  remoteType: 'var',
  filename: "remoteEntry.js",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
    app2: "app2@https://kevinmfe.s3.amazonaws.com/app2/dist/remoteEntry.js",
  },
  shared: {
      ...deps,
      react: {
        eager: true,
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        eager: true,
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
};