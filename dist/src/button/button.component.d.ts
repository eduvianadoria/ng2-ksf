import { EventEmitter } from '@angular/core';
export declare class ButtonComponent {
    nome: string;
    estilo: string;
    tipo: string;
    desabilitado: boolean;
    acao: EventEmitter<{}>;
    confirmacao: boolean;
    executaAcao(): void;
}
