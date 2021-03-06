const path = require("path");

module.exports = {
  entry: {
    EditorPanelWebview: path.resolve(
      __dirname,
      "./src/views/EditorPanelWebview.tsx"
    ),
    NotesPanelWebview: path.resolve(
      __dirname,
      "./src/views/NotesPanelWebview.tsx"
    ),
  },
  output: {
    path: path.resolve(__dirname, "./out/views"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-to-string-loader",
          },
          {
            loader: "style-loader", // Creates style nodes from JS strings
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        loader: "url-loader?limit=1000000",
      },
    ],
  },
  node: {
    fs: "empty",
  },
};
