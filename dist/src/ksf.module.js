import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelComponent } from './panel/panel.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { BackendService } from './backend/backend.service';
import { TableComponent } from './table/table.component';
export function backendServiceFactory(http) {
    return new BackendService(http);
}
;
var KsfModule = (function () {
    function KsfModule() {
    }
    return KsfModule;
}());
export { KsfModule };
KsfModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgbModule.forRoot()],
                declarations: [PanelComponent, FormComponent, ButtonComponent, TableComponent],
                exports: [PanelComponent, FormComponent, ButtonComponent, TableComponent],
                providers: [
                    {
                        provide: BackendService,
                        useFactory: backendServiceFactory,
                        deps: [Http]
                    }
                ]
            },] },
];
/** @nocollapse */
KsfModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ksf.module.js.map