import { EventEmitter } from '@angular/core';
import { ColumnType } from './column-type';
export declare class TableComponent {
    pageSize: Array<number>;
    collectionSize: number;
    page: number;
    perPage: number;
    maxSize: number;
    columns: Array<any>;
    rotate: boolean;
    ellipses: boolean;
    boundaryLinks: boolean;
    onPageChange: EventEmitter<{}>;
    onSizeChange: EventEmitter<{}>;
    onSortChange: EventEmitter<{}>;
    pageChange(page: number): void;
    sizeChange(size: number): void;
    sortChange(columnType: ColumnType): void;
}
