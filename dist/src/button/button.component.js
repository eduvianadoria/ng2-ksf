import { Component, Input, Output, EventEmitter } from '@angular/core';
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.nome = 'Ok';
        this.estilo = 'btn-default';
        this.tipo = 'button';
        this.desabilitado = false;
        this.acao = new EventEmitter();
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
export { ButtonComponent };
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ksf-button',
                template: "\n                <button (click)=\"executaAcao()\" class=\"btn {{estilo}}\" [type]=\"tipo\" [disabled]=\"desabilitado\">{{nome}}</button>\n               "
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = function () { return []; };
ButtonComponent.propDecorators = {
    'nome': [{ type: Input },],
    'estilo': [{ type: Input },],
    'tipo': [{ type: Input },],
    'desabilitado': [{ type: Input },],
    'acao': [{ type: Output },],
    'confirmacao': [{ type: Input },],
};
//# sourceMappingURL=button.component.js.map