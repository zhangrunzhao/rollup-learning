import build from "./plugins/rollup-plugin-build";

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist'
  },
  plugins: [
    build()
  ]
};