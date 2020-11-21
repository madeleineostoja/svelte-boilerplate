import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import autoPreprocess from 'svelte-preprocess';

import pkg from './package.json';

export default {
  input: '<%= name %>.svelte',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'Imgix' }
  ],
  plugins: [
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonJS(),
    svelte({
      preprocess: autoPreprocess()
    })
  ]
};
