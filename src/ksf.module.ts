import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PanelComponent } from './panel/panel.component';
//import { FormComponent } from './form/form.component';
//import { ButtonComponent } from './button/button.component';
//import { BackendService } from './backend/backend.service';
//import { TableComponent } from './table/table.component';

export function KsfFactory() {
    //return new Ng2Fone();
};

@NgModule({
    declarations: [ PanelComponent],
    exports: [ PanelComponent],

    //imports: [ CommonModule, NgbModule.forRoot() ],
    //declarations: [ PanelComponent, FormComponent, ButtonComponent, TableComponent ],
    //exports: [ PanelComponent, FormComponent, ButtonComponent, TableComponent ],
    //providers: [ BackendService ]
})
export class KsfModule {}