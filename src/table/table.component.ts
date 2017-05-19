import { styles } from './table.component.css.shim.ngstyle';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColumnType } from './column-type';

@Component({
    selector: 'ksf-table',
    template: `
            <style>
                th.sorting_ss_asc {
                    background: url('../images/sort_asc.png') no-repeat center right;
                    cursor: pointer;
                }

                th.sorting_ss_desc {
                    background: url('../images/sort_desc.png') no-repeat center right;
                    cursor: pointer;
                }

                th.sorting_ss {
                    background: url('../images/sort_both.png') no-repeat center right;
                    cursor: pointer;
                }
            </style>

            <table class="table table-condensed table-bordered table-striped">
            <thead>
                    <tr>
                        <th *ngFor="let column of columns" class="{{column.class}}" (click)="sortChange(column)">
                            {{column.title}}
                        </th>
                    </tr>
            </thead>
               <ng-content></ng-content>
            </table>

            <div class="row">

                <div class="col-lg-6">

                    <ngb-pagination 
                        [(page)]="page" 
                        [(pageSize)]="perPage"
                        [(collectionSize)]="collectionSize" 
                        [(maxSize)]="maxSize" 
                        [rotate]="rotate" 
                        [ellipses]="ellipses" 
                        [boundaryLinks]="boundaryLinks"
                        (pageChange)="pageChange($event)"></ngb-pagination>
                </div>

                <div class="col-lg-6">
                    <div class="btn-group pull-right"> 
                        <button *ngFor="let size of pageSize"  [ngClass]="{'active': size == perPage}" (click)="sizeChange(size)" type="button" class="btn btn-default"> 
                            <span>{{size}}</span> 
                        </button>
                    </div>
                </div>

            </div>
    `
})
export class TableComponent {

    pageSize : Array<number> = [10, 25, 50, 100];

    @Input() collectionSize: number;
    @Input() page: number;
    @Input() perPage: number;
    @Input() maxSize: number;
    @Input() columns: Array<any>;
    @Input() rotate: boolean = true;
    @Input() ellipses: boolean = false;
    @Input() boundaryLinks: boolean = true;
    @Output() onPageChange = new EventEmitter();
    @Output() onSizeChange = new EventEmitter();
    @Output() onSortChange = new EventEmitter();

    pageChange(page: number) {
        this.page = page;
        this.onPageChange.emit(page);
    }

    sizeChange(size: number) {
        this.perPage = size;
        this.onSizeChange.emit(size);
    }

    sortChange(columnType: ColumnType) {
        this.onSortChange.emit(columnType);
    }
}