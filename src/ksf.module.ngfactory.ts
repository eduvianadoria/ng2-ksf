/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './ksf.module';
import * as import2 from '@angular/core/src/di/injector';
class KsfModuleInjector extends import0.NgModuleInjector<import1.KsfModule> {
  _KsfModule_0:import1.KsfModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.KsfModule {
    this._KsfModule_0 = new import1.KsfModule();
    return this._KsfModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.KsfModule)) { return this._KsfModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const KsfModuleNgFactory:import0.NgModuleFactory<import1.KsfModule> = new import0.NgModuleFactory(KsfModuleInjector,import1.KsfModule);