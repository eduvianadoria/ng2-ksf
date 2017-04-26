import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
//import { FormComponent } from './form/form.component';
//import { ButtonComponent } from './button/button.component';
//import { BackendService } from './backend/backend.service';
//import { TableComponent } from './table/table.component';
export function KsfFactory() {
    //return new Ng2Fone();
}
;
export var KsfModule = (function () {
    function KsfModule() {
    }
    KsfModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PanelComponent],
                    exports: [PanelComponent],
                },] },
    ];
    /** @nocollapse */
    KsfModule.ctorParameters = function () { return []; };
    return KsfModule;
}());
//# sourceMappingURL=ksf.module.js.map