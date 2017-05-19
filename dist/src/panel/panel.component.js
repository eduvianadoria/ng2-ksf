import { Component, Input } from '@angular/core';
var PanelComponent = (function () {
    function PanelComponent() {
    }
    return PanelComponent;
}());
export { PanelComponent };
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ksf-panel',
                template: "<div class=\"panel panel-default\">\n                 <div class=\"panel-heading\">\n                   <h3 class=\"panel-title\">{{title}}</h3>\n                 </div>\n                 <div class=\"panel-body\">\n                      <ng-content></ng-content>\n                 </div>\n               </div>"
            },] },
];
/** @nocollapse */
PanelComponent.ctorParameters = function () { return []; };
PanelComponent.propDecorators = {
    'title': [{ type: Input },],
};
//# sourceMappingURL=panel.component.js.map