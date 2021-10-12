import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

const typescriptOptions = {
  rollupCommonJSResolveHack: true,
  clean: true,
  exclude: ['*.d.ts', '**/*.d.ts', '**/*.stories.tsx'],
}

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    '../../node_modules/prop-types/index.js': ['elementType', 'bool', 'func', 'object', 'oneOfType', 'element'],
    '../../node_modules/react-is/index.js': [
      'ForwardRef',
      'isLazy',
      'isMemo',
      'isValidElementType',
      'isFragment',
      'Memo',
    ],
  },
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    external(),
    resolve(),
    typescript(typescriptOptions),
    commonjs(commonjsOptions),
    sizeSnapshot(),
    isProduction && terser(),
  ],
}
