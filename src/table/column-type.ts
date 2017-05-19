export class ColumnType {

    constructor(private _title: string, private _name: string, private _className: string, private _classNameSort: string) {
        this._title = _title;
        this._name = _name;
        this._className = _className;
        this._classNameSort = _classNameSort;
    }

    get title() : string {
        return this._title;
    }

    get name() : string {
        return this._name;
    }

    get class(): string {
        return this._className + ' ' + this._classNameSort;
    }

    get classNameSort(): string {
        return this._classNameSort;
    }

    set classNameSort(_classNameSort: string) {
        this._classNameSort = _classNameSort;
    }
}