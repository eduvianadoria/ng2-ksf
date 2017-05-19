var TableDefinition = (function () {
    function TableDefinition() {
        this.page = 1;
        this.perPage = 10;
        this.collectionSize = 0;
        this.columns = [];
    }
    TableDefinition.prototype.onPageChange = function (page) {
        this.page = page;
        this.loadDataTable();
    };
    TableDefinition.prototype.onSizeChange = function (perPage) {
        this.perPage = perPage;
        this.loadDataTable();
    };
    TableDefinition.prototype.onSortChange = function (columnType) {
        if (columnType.classNameSort == null) {
            return;
        }
        var classNameSort;
        var orderType;
        if (columnType.classNameSort == 'sorting_ss_asc') {
            classNameSort = 'sorting_ss_desc';
            orderType = 'desc';
        }
        else {
            classNameSort = 'sorting_ss_asc';
            orderType = 'asc';
        }
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var columm = _a[_i];
            if (columm.classNameSort != null) {
                if (columm.name == columnType.name) {
                    columm.classNameSort = classNameSort;
                }
                else {
                    columm.classNameSort = 'sorting_ss';
                }
            }
        }
        this.orderField = columnType.name;
        this.orderType = orderType;
        this.loadDataTable();
    };
    TableDefinition.prototype.loadDataTable = function () {
        // será implementado na classe filha...
    };
    TableDefinition.prototype.tableRefresh = function (count, rows) {
        // será implementado na classe filha...
    };
    return TableDefinition;
}());
export { TableDefinition };
//# sourceMappingURL=table.definition.js.map