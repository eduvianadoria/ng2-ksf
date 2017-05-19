import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PanelComponent } from './panel/panel.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { BackendService } from './backend/backend.service';
import { TableComponent } from './table/table.component';

export function backendServiceFactory(http: Http): BackendService {
    return new BackendService(http);
};

@NgModule({
    imports: [ CommonModule, NgbModule.forRoot() ],
    declarations: [ PanelComponent, FormComponent, ButtonComponent, TableComponent],
    exports: [ PanelComponent, FormComponent, ButtonComponent, TableComponent],
    providers: [ 
        {
            provide: BackendService,
            useFactory: backendServiceFactory,
            deps: [Http]
        }
     ]
})
export class KsfModule {}