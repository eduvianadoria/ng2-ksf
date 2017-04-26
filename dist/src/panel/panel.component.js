import { Component, Input } from '@angular/core';
export var PanelComponent = (function () {
    function PanelComponent() {
    }
    PanelComponent.decorators = [
        { type: Component, args: [{
                    //moduleId: module.id,
                    selector: 'ksf-panel',
                    templateUrl: './panel.component.html'
                },] },
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return []; };
    PanelComponent.propDecorators = {
        'title': [{ type: Input },],
    };
    return PanelComponent;
}());
//# sourceMappingURL=panel.component.js.map