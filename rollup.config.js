export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2-ksf.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2-ksf',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@ng-bootstrap/ng-bootstrap': 'ng-bootstrap',
  },
  onwarn: function (message) {
    return;
    //console.error(message);
  }
}