(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/http'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/http', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@angular/forms'], factory) :
    (factory((global['ng2-ksf'] = global['ng2-ksf'] || {}),global.ng.core,global.ng.http,global.ng.common,global['ng-bootstrap'],global.ng.forms));
}(this, (function (exports,_angular_core,_angular_http,_angular_common,_ngBootstrap_ngBootstrap,_angular_forms) { 'use strict';

var PanelComponent = (function () {
    function PanelComponent() {
    }
    return PanelComponent;
}());
PanelComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ksf-panel',
                template: "<div class=\"panel panel-default\">\n                 <div class=\"panel-heading\">\n                   <h3 class=\"panel-title\">{{title}}</h3>\n                 </div>\n                 <div class=\"panel-body\">\n                      <ng-content></ng-content>\n                 </div>\n               </div>"
            },] },
];
/** @nocollapse */
PanelComponent.ctorParameters = function () { return []; };
PanelComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
};

var FormComponent = (function () {
    function FormComponent(fb) {
        this.fb = fb;
    }
    FormComponent.prototype.group = function (definition) {
        this.form = this.fb.group(definition);
    };
    return FormComponent;
}());
FormComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ksf-form',
                template: "\n        <form class=\"row\">\n            <ng-content></ng-content>\n        </form>    \n    "
            },] },
];
/** @nocollapse */
FormComponent.ctorParameters = function () { return [
    { type: _angular_forms.FormBuilder, },
]; };

var ButtonComponent = (function () {
    function ButtonComponent() {
        this.nome = 'Ok';
        this.estilo = 'btn-default';
        this.tipo = 'button';
        this.desabilitado = false;
        this.acao = new _angular_core.EventEmitter();
        this.confirmacao = false;
    }
    ButtonComponent.prototype.executaAcao = function () {
        if (this.confirmacao) {
            if (confirm('Confirma?')) {
                this.acao.emit();
            }
            return;
        }
        this.acao.emit();
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ksf-button',
                template: "\n                <button (click)=\"executaAcao()\" class=\"btn {{estilo}}\" [type]=\"tipo\" [disabled]=\"desabilitado\">{{nome}}</button>\n               "
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = function () { return []; };
ButtonComponent.propDecorators = {
    'nome': [{ type: _angular_core.Input },],
    'estilo': [{ type: _angular_core.Input },],
    'tipo': [{ type: _angular_core.Input },],
    'desabilitado': [{ type: _angular_core.Input },],
    'acao': [{ type: _angular_core.Output },],
    'confirmacao': [{ type: _angular_core.Input },],
};

var BackendService = (function () {
    function BackendService(http) {
        this.queryString = [];
        this.http = http;
        this.headers = new _angular_http.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    BackendService.prototype.addHeaders = function (headers) {
        for (var h in headers) {
            if (headers[h]) {
                this.headers.append(h, headers[h]);
            }
        }
    };
    BackendService.prototype.addQueryString = function (queryString) {
        this.queryString = [];
        for (var p in queryString) {
            if (queryString[p])
                this.queryString.push(encodeURIComponent(p) + "=" + encodeURIComponent(queryString[p]));
        }
    };
    BackendService.prototype.getQueryString = function () {
        return (this.queryString.join("&") ?
            "?" + this.queryString.join("&")
            : "");
    };
    BackendService.prototype.getUrl = function (url) {
        return url + this.getQueryString();
    };
    BackendService.prototype.getAll = function (url, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .get(this.getUrl(url), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getOne = function (url, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .get(this.getUrl(url), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.post = function (url, body, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .post(this.getUrl(url), JSON.stringify(body), { headers: this.headers });
    };
    BackendService.prototype.put = function (url, body, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .put(this.getUrl(url), JSON.stringify(body), { headers: this.headers });
    };
    BackendService.prototype.delete = function (url, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .delete(this.getUrl(url));
    };
    return BackendService;
}());
BackendService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
BackendService.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };

var TableComponent = (function () {
    function TableComponent() {
        this.pageSize = [10, 25, 50, 100];
        this.rotate = true;
        this.ellipses = false;
        this.boundaryLinks = true;
        this.onPageChange = new _angular_core.EventEmitter();
        this.onSizeChange = new _angular_core.EventEmitter();
        this.onSortChange = new _angular_core.EventEmitter();
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
TableComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ksf-table',
                template: "\n            <style>\n                th.sorting_ss_asc {\n                    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQjM4MkY2QzVGRUYwRTJDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkFEQzYxNjIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkFEQzYxNTIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z5ABTAAAAI5JREFUeNpi/P//PwO1ABMDFQELIQXVjfe4gFQbEJe11iv9otRl2UCcBcSphBQy4gszoKu0gNROIJYB4jtA7AF03V2SXQY0iBFIFUMNAgEVIM6DipPsTQcgDkQTSwRia5IMA9rOC6RqgVgQTQokXgOUZyfFZSFQF/zAgh2BOIjkCBjQRDtq2Khh9DAMIMAAT9AmNBDSXegAAAAASUVORK5CYII=\") no-repeat center right;\n                    cursor: pointer;\n                }\n\n                th.sorting_ss_desc {\n                    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQjM4MkY2QzVGRUYwRTJDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkFEQzYxQTIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkFEQzYxOTIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1fsfwAAAAJdJREFUeNpi/P//PwO1ABMDFcGoYaOG0cMwFmyC1Y33IoHUAiD+h8MBGa31SvOJddk6IN4PxBxY8FEgXkO0N4G2/gRSLUD8GU3qPRA3A+U/kxpmIBege2U9EB/ApYERX6kBDDtlILUDiFWA+AkQuwNddY2s2ARqvAukJgDxbyCehM8gnLGJBmYDsSoQTyWkkHHQFo4AAQYAAA0piq4hbqwAAAAASUVORK5CYII=\") no-repeat center right;\n                    cursor: pointer;\n                }\n\n                th.sorting_ss {\n                    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDMDM5NjkyMkMxMTFFMUExRjFBREFENUIyQTUzOEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDMDM5NkEyMkMxMTFFMUExRjFBREFENUIyQTUzOEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNEMwMzk2NzIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNEMwMzk2ODIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm8NGvcAAADkSURBVHjaYvz//z8DtQATAxUBCzbBu3fvInO5gLgNiMuA+BdMUFlZmSyXZQNxFhCnUupNLSDOA2JWIC4AOYhcwxiBuBiIZaB8FajBjOQY5gDEgWhiiUBsTaphvEBcC8SCWMRrgJidFMNCoC74gQU7AnEQ1nChZqLFlc4igdQCIP6HwzcZwHQ2n1hvrgPi/UDMgQUfBeI1pITZTyBuAeLPaOLvgbgZizjBpAFyAbpX1gPxAXLSGShmJgHxHSj/CRD3QsXJyk6gHD8BiH9DDb5GcmyigdlArArEUwkpZBy0hSNAgAEA5Ho0sMdEmU8AAAAASUVORK5CYII=\") no-repeat center right;\n                    cursor: pointer;\n                }\n            </style>\n\n            <div class=\"table-responsive\">\n\n                <table class=\"table table-striped table-bordered table-hover\">\n                <thead>\n                        <tr>\n                            <th *ngFor=\"let column of columns\" class=\"{{column.class}}\" (click)=\"sortChange(column)\">\n                                {{column.title}}\n                            </th>\n                        </tr>\n                </thead>\n                    <ng-content></ng-content>\n                </table>\n            \n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-lg-6\">\n\n                    <ngb-pagination \n                        [(page)]=\"page\" \n                        [(pageSize)]=\"perPage\"\n                        [(collectionSize)]=\"collectionSize\" \n                        [(maxSize)]=\"maxSize\" \n                        [rotate]=\"rotate\" \n                        [ellipses]=\"ellipses\" \n                        [boundaryLinks]=\"boundaryLinks\"\n                        (pageChange)=\"pageChange($event)\"></ngb-pagination>\n                </div>\n\n                <div class=\"col-lg-6\" style=\"text-align: right;\">\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Itens por p\u00E1gina\">\n                        <button *ngFor=\"let size of pageSize\" [ngClass]=\"{'active': size == perPage}\"\n                            (click)=\"sizeChange(size)\" type=\"button\" class=\"btn btn-secondary\">\n                            {{size}}\n                        </button>\n                    </div>           \n                </div>\n\n            </div>\n    "
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = function () { return []; };
TableComponent.propDecorators = {
    'collectionSize': [{ type: _angular_core.Input },],
    'page': [{ type: _angular_core.Input },],
    'perPage': [{ type: _angular_core.Input },],
    'maxSize': [{ type: _angular_core.Input },],
    'columns': [{ type: _angular_core.Input },],
    'rotate': [{ type: _angular_core.Input },],
    'ellipses': [{ type: _angular_core.Input },],
    'boundaryLinks': [{ type: _angular_core.Input },],
    'onPageChange': [{ type: _angular_core.Output },],
    'onSizeChange': [{ type: _angular_core.Output },],
    'onSortChange': [{ type: _angular_core.Output },],
};

function backendServiceFactory(http) {
    return new BackendService(http);
}

var KsfModule = (function () {
    function KsfModule() {
    }
    return KsfModule;
}());
KsfModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, _ngBootstrap_ngBootstrap.NgbModule.forRoot()],
                declarations: [PanelComponent, FormComponent, ButtonComponent, TableComponent],
                exports: [PanelComponent, FormComponent, ButtonComponent, TableComponent],
                providers: [
                    {
                        provide: BackendService,
                        useFactory: backendServiceFactory,
                        deps: [_angular_http.Http]
                    }
                ]
            },] },
];
/** @nocollapse */
KsfModule.ctorParameters = function () { return []; };

var ResponseAll = (function () {
    function ResponseAll() {
    }
    return ResponseAll;
}());

var ColumnType = (function () {
    function ColumnType(_title, _name, _className, _classNameSort) {
        this._title = _title;
        this._name = _name;
        this._className = _className;
        this._classNameSort = _classNameSort;
        this._title = _title;
        this._name = _name;
        this._className = _className;
        this._classNameSort = _classNameSort;
    }
    Object.defineProperty(ColumnType.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnType.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnType.prototype, "class", {
        get: function () {
            return (this._className != null ? this._className : '') + ' ' + this._classNameSort;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnType.prototype, "classNameSort", {
        get: function () {
            return this._classNameSort;
        },
        set: function (_classNameSort) {
            this._classNameSort = _classNameSort;
        },
        enumerable: true,
        configurable: true
    });
    return ColumnType;
}());

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

exports.KsfModule = KsfModule;
exports.PanelComponent = PanelComponent;
exports.BackendService = BackendService;
exports.ResponseAll = ResponseAll;
exports.ButtonComponent = ButtonComponent;
exports.ColumnType = ColumnType;
exports.TableDefinition = TableDefinition;
exports.TableComponent = TableComponent;
exports.FormComponent = FormComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
