import { FormGroup, FormBuilder } from '@angular/forms';
export declare class FormComponent {
    form: FormGroup;
    fb: FormBuilder;
    constructor(fb: FormBuilder);
    group(definition: Object): void;
}
