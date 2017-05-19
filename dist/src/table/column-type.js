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
            return this._className + ' ' + this._classNameSort;
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
export { ColumnType };
//# sourceMappingURL=column-type.js.map