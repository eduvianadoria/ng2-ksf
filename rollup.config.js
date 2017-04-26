export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2-ksf.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2-ksf',
  globals: {
    '@angular/core': 'ng.core',
  }
}