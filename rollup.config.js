import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import hash from 'rollup-plugin-hash';
const env = process.env.NODE_ENV || 'development';

const entry = 'src/app.js';
const dest = 'dist/bundle.js';

const plugins = [
  buble(),
];

if (env === 'production') {
  const minifier = uglify({}, minify);
  const hasher = hash({
    dest: 'dist/bundle.[hash].js'
  });
  plugins.push(minifier, hasher);
}

export default {
  entry,
  dest,
  plugins,
  format: 'es',
}
