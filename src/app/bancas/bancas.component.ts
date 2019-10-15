import { Component, OnInit } from '@angular/core';

// importanto a lista de Bancas
import { Banca } from './banca/banca.model'

// importando o serviçoptimize
import { BancasService } from './bancas.service'

@Component({
  selector: 'otk-bancas',
  templateUrl: './bancas.component.html'
})

export class BancasComponent implements OnInit {

//criando um array em memória para representar os dados da banca para teste depois disso deixar undefined
	bancas: Banca[]


// utilizando o constructor para criar campo private injetando a classe de servido no componente quando colocamos private ou public
// o type script automaticamente gera um propriedade no componente
// então preciso declarar esse serviço no contrutor e o angular vai prover a instancia
  constructor(private bancasService: BancasService) { }

// ele é chamado uma vez no ciclo de vida do componente após inicializar meu bancasService
  ngOnInit() {
		this.bancasService.bancas()
		.subscribe(bancas => this.bancas = bancas['bancas'])
  }
}
