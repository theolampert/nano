import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
const env = process.env.NODE_ENV || 'development';

const plugins = [
  buble()
];

if (env === 'production') {
  const minifier = uglify({}, minify);
  plugins.push(minifier);
}

export default {
  entry: 'src/app.js',
  dest: 'dist/bundle.js',
  format: 'es',
  plugins: plugins,
}
