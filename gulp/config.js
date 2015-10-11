var dest = 'build',
  src = 'src',
  mui = './node_modules/material-ui/src';

module.exports = {
  browserSync: {
    proxy: "http://localhost:5000",
    files: [dest + '/**'],
    browser: "google chrome",
    port: 7000
  },
  markup: {
    src: [src + "/www/**/**","!"+src + "/www/css"],
    dest: dest
  },
  sass: {
    src: src + "/www/css/**/**/*.scss",
    dest: dest + "/css"
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
