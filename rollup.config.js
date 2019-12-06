import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/ules.js',
  output: {
    file: 'dist/ules.js',
    format: 'umd',
    name: 'Ules',
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
