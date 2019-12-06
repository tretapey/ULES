import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/ULES.js',
  output: {
    file: 'dist/ULES.js',
    format: 'umd',
    name: 'ULES',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: "usage",
          }
        ],
      ],
    }),
    postcss(),
  ]
};
