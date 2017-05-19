import { Component, Input, Output, EventEmitter  } from '@angular/core'; 

@Component({
    selector: 'ksf-button',
    template: `
                <button (click)="executaAcao()" class="btn {{estilo}}" [type]="tipo" [disabled]="desabilitado">{{nome}}</button>
               `
})
export class ButtonComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean = false;

    executaAcao() {

        if (this.confirmacao) {
            if(confirm('Confirma?')) {
                this.acao.emit();
            }
            return;
        }
        this.acao.emit();
    }

}