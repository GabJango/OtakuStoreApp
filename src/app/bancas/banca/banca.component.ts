// trabalhando um componente individual que representa os dados individuais de cada banca
// esses componentes devem ser criados dentro da pasta onde se deseja trabalhar individualmente item

// importando o decorator Input
// o decorator Input é responsavel por
import { Component, OnInit, Input } from '@angular/core';

//importanto a interface para ser utilizada na nossa propriedade
import { Banca } from './banca.model';

@Component({
  selector: 'otk-banca',
  templateUrl: './banca.component.html'
})
export class BancaComponent implements OnInit {

// criando uma propriedade que recebe algum dado esse dado é uma interface que criamos em banca.model.ts
// 2 possibilidades usar tipo any para representar aquela propriedade mas cuidado porque voce nao sabe oque ela representa ainda
// melhor criar um tipo que representa os dados das bancas
// marcado nossa propriedade com o decorator Input asism permitindo que outros componentes possam passar a banca para esse componente
// ele podera exibir os dados daquela banca
 @Input() banca: Banca

  constructor() { }

  ngOnInit() {
  }

}
