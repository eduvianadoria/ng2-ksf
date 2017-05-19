# NG KSF - [Angular](http://angular.io/) directives specific to [Bootstrap 3](http://getbootstrap.com/)

Welcome to the Angular version of the [Angular UI KSF](https://github.com/eduvianadoria/ng2-ksf/) library.
This library is being built from scratch by the [ui-bootstrap team](https://github.com/angular-ui/bootstrap).
We are using TypeScript and targeting the Bootstrap 3 CSS framework.

As with Bootstrap, this library is a work in progress. Please check out our list of
[issues](https://github.com/eduvianadoria/ng2-ksf/issues) to see all the things we are implementing.
Feel free to make comments there.

## Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)
  - [SystemJS](#systemjs)
- [Example](#Example)

## Dependencies
* [Angular](https://angular.io) (tested with 4.1.2)
* [Bootstrap 3](https://getbootstrap.com) (VIA NPM > npm install bootstrap@3 - tested with 3.3.7)
* [@ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap/) (tested with 1.0.0-alpha.26)

## Installation
After installing the above dependencies, install `ng2-ksf` via:
```shell
npm install --save ng2-ksf
```
Once installed you need to import our main module:
```js
import {KsfModule} from 'ng2-ksf';
```
Other modules in your application can simply import `KsfModule`:

```js
import {KsfModule} from 'ng2-ksf';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [KsfModule, ...], 
})
export class OtherModule {
}
```

### SystemJS
If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, `map` needs to tell the System loader where to look for `ng2-ksf`:
```js
map: {
  'ng2-ksf': 'npm:ng2-ksf/bundles/ng2-ksf.umd.js',
}
```

## Example
* ksf-panel
```html
    <ksf-panel title="My Title Panel">
    </ksf-panel>
```
