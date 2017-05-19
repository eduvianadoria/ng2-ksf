import { ColumnType } from './column-type';
import { TableInterface } from './table.interface';

export class TableDefinition implements TableInterface  {
    
    page: number = 1;
    perPage: number = 10;
    collectionSize: number = 0;
    columns: Array<ColumnType> = [];
    orderField: string;
    orderType: string;

    onPageChange(page: number) {
        this.page = page;
        this.loadDataTable();
    }

    onSizeChange(perPage: number) {
        this.perPage = perPage;
        this.loadDataTable();
    }

    onSortChange(columnType: ColumnType) {

        if (columnType.classNameSort == null) {
            return;
        }
        
        var classNameSort: string;
        var orderType: string;

        if (columnType.classNameSort == 'sorting_ss_asc') {
            classNameSort = 'sorting_ss_desc';
            orderType = 'desc';
        } else {
            classNameSort = 'sorting_ss_asc';
            orderType = 'asc';
        }

        for (let columm of this.columns) {
            if (columm.classNameSort != null) {
                if (columm.name == columnType.name) {
                    columm.classNameSort = classNameSort;
                } else {
                    columm.classNameSort = 'sorting_ss';
                }
            }
        }

        this.orderField = columnType.name;
        this.orderType = orderType;
        this.loadDataTable();
    }

    loadDataTable() { 
        // será implementado na classe filha...
    }

    tableRefresh(count: number, rows: Array<any>) { 
        // será implementado na classe filha...
    }
}