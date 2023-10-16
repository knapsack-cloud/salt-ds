const { KnapsackReactRenderer } = require("@knapsack/renderer-react");
const { configureKnapsack } = require("@knapsack/app");
const { join } = require("path");
const { version } = require("../package.json");

module.exports = configureKnapsack({
  data: join(__dirname, "./data"),
  dist: join(__dirname, "./dist"),
  public: join(__dirname, "./public"),
  version,
  templateRenderers: [new KnapsackReactRenderer({
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-typescript", "@babel/preset-react"],
                },
              },
            ],
          },
          // CSS loader rule
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    }
  })],
  plugins: [],
  cloud: {
    siteId: "salt",
    repoRoot: join(__dirname, ".."),
  },
});
