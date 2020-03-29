module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      unitPrecision: 17,
      propList: ['*'],
      exclude: file => !file.includes('src/renderer'),
    },
  },
};
