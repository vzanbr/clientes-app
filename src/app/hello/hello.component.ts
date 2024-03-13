import {Component} from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    nome: string;
    clientes : Cliente[];

    constructor() {
        this.nome = 'gabriel';
        let cliente = new Cliente('Gabriel', 24);
        let cliente2 = new Cliente('Mane', 15)
        let cliente3 = new Cliente('Mane2', 150)
        this.clientes = [cliente, cliente2, cliente3];
    }
}

class Cliente {

    constructor(
        public nome: string,
        public idade: number
    ) {}
}