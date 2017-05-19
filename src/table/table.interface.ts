import { ColumnType } from './column-type';

export interface TableInterface {

    page: number;
    perPage: number;
    collectionSize: number;
    columns: Array<ColumnType>;
    orderField: string;
    orderType: string;

    loadDataTable(): void;
    onPageChange(page: number): void;
    onSizeChange(size: number): void;
    onSortChange(columnType: ColumnType): void;
    tableRefresh(count: number, rows: Array<any>): void;
}