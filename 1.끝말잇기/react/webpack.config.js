const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스: production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  }, // entry 확장자 파악하는 설정

  entry: {
    app: ["./client"],
  }, // 입력

  modules: {
    rules: [
      {
        test: /\.jsx?/, // js와 jsx 파일에 룰을 적용하겠다
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@bable/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    // 현재 폴더로 경로를 설정해준다.
    filename: "app.js",
  }, // 출력
};
