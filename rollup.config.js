import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json' assert {type: "json"}

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    }
  ],
  plugins: [sass({ insert: true }), typescript()],
  external: ['react', 'react-dom']
}
