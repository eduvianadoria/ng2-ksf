import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'ksf-form',
    template: `
        <form class="row">
            <ng-content></ng-content>
        </form>    
    `
})
export class FormComponent {

    form: FormGroup;
    fb: FormBuilder;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    group(definition: Object) {
        this.form = this.fb.group(definition);
    }
}