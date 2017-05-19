import { ColumnType } from './column-type';
import { TableInterface } from './table.interface';
export declare class TableDefinition implements TableInterface {
    page: number;
    perPage: number;
    collectionSize: number;
    columns: Array<ColumnType>;
    orderField: string;
    orderType: string;
    onPageChange(page: number): void;
    onSizeChange(perPage: number): void;
    onSortChange(columnType: ColumnType): void;
    loadDataTable(): void;
    tableRefresh(count: number, rows: Array<any>): void;
}
