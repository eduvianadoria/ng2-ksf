(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global['ng2-ksf'] = global['ng2-ksf'] || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var PanelComponent = (function () {
    function PanelComponent() {
    }
    PanelComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    //moduleId: module.id,
                    selector: 'ksf-panel',
                    templateUrl: './panel.component.html'
                },] },
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return []; };
    PanelComponent.propDecorators = {
        'title': [{ type: _angular_core.Input },],
    };
    return PanelComponent;
}());

//import { FormComponent } from './form/form.component';
//import { ButtonComponent } from './button/button.component';
//import { BackendService } from './backend/backend.service';
//import { TableComponent } from './table/table.component';


var KsfModule = (function () {
    function KsfModule() {
    }
    KsfModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [PanelComponent],
                    exports: [PanelComponent],
                },] },
    ];
    /** @nocollapse */
    KsfModule.ctorParameters = function () { return []; };
    return KsfModule;
}());

exports.KsfModule = KsfModule;
exports.PanelComponent = PanelComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
