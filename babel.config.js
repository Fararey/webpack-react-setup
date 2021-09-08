module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins:["react-refresh/babel"]
};

// 2 строчка означает, что не нужно импортировать реакт каждый раз в jsx
