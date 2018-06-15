module.exports = {
  plugins: [
    require('cssnano')({
      autoprefixer: {
        add: true
      },
      reduceIdents: false,
      mergeIdents: false,
      normalizeUrl: false,
      zindex: false
    })
  ]
}