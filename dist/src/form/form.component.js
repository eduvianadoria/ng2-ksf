import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var FormComponent = (function () {
    function FormComponent(fb) {
        this.fb = fb;
    }
    FormComponent.prototype.group = function (definition) {
        this.form = this.fb.group(definition);
    };
    return FormComponent;
}());
export { FormComponent };
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ksf-form',
                template: "\n        <form class=\"row\">\n            <ng-content></ng-content>\n        </form>    \n    "
            },] },
];
/** @nocollapse */
FormComponent.ctorParameters = function () { return [
    { type: FormBuilder, },
]; };
//# sourceMappingURL=form.component.js.map