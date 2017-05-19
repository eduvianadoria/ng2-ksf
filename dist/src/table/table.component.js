import { Component, Input, Output, EventEmitter } from '@angular/core';
var TableComponent = (function () {
    function TableComponent() {
        this.pageSize = [10, 25, 50, 100];
        this.rotate = true;
        this.ellipses = false;
        this.boundaryLinks = true;
        this.onPageChange = new EventEmitter();
        this.onSizeChange = new EventEmitter();
        this.onSortChange = new EventEmitter();
    }
    TableComponent.prototype.pageChange = function (page) {
        this.page = page;
        this.onPageChange.emit(page);
    };
    TableComponent.prototype.sizeChange = function (size) {
        this.perPage = size;
        this.onSizeChange.emit(size);
    };
    TableComponent.prototype.sortChange = function (columnType) {
        this.onSortChange.emit(columnType);
    };
    return TableComponent;
}());
export { TableComponent };
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ksf-table',
                template: "\n            <style>\n                th.sorting_ss_asc {\n                    background: url('../images/sort_asc.png') no-repeat center right;\n                    cursor: pointer;\n                }\n\n                th.sorting_ss_desc {\n                    background: url('../images/sort_desc.png') no-repeat center right;\n                    cursor: pointer;\n                }\n\n                th.sorting_ss {\n                    background: url('../images/sort_both.png') no-repeat center right;\n                    cursor: pointer;\n                }\n            </style>\n\n            <table class=\"table table-condensed table-bordered table-striped\">\n            <thead>\n                    <tr>\n                        <th *ngFor=\"let column of columns\" class=\"{{column.class}}\" (click)=\"sortChange(column)\">\n                            {{column.title}}\n                        </th>\n                    </tr>\n            </thead>\n               <ng-content></ng-content>\n            </table>\n\n            <div class=\"row\">\n\n                <div class=\"col-lg-6\">\n\n                    <ngb-pagination \n                        [(page)]=\"page\" \n                        [(pageSize)]=\"perPage\"\n                        [(collectionSize)]=\"collectionSize\" \n                        [(maxSize)]=\"maxSize\" \n                        [rotate]=\"rotate\" \n                        [ellipses]=\"ellipses\" \n                        [boundaryLinks]=\"boundaryLinks\"\n                        (pageChange)=\"pageChange($event)\"></ngb-pagination>\n                </div>\n\n                <div class=\"col-lg-6\">\n                    <div class=\"btn-group pull-right\"> \n                        <button *ngFor=\"let size of pageSize\"  [ngClass]=\"{'active': size == perPage}\" (click)=\"sizeChange(size)\" type=\"button\" class=\"btn btn-default\"> \n                            <span>{{size}}</span> \n                        </button>\n                    </div>\n                </div>\n\n            </div>\n    "
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = function () { return []; };
TableComponent.propDecorators = {
    'collectionSize': [{ type: Input },],
    'page': [{ type: Input },],
    'perPage': [{ type: Input },],
    'maxSize': [{ type: Input },],
    'columns': [{ type: Input },],
    'rotate': [{ type: Input },],
    'ellipses': [{ type: Input },],
    'boundaryLinks': [{ type: Input },],
    'onPageChange': [{ type: Output },],
    'onSizeChange': [{ type: Output },],
    'onSortChange': [{ type: Output },],
};
//# sourceMappingURL=table.component.js.map