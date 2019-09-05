import { Component, OnInit } from '@angular/core';

// importanto a lista de Bancas
import { Banca } from './banca/banca.model'
@Component({
  selector: 'otk-bancas',
  templateUrl: './bancas.component.html'
})
export class BancasComponent implements OnInit {

//criando um array em memória para representar os dados da banca
	bancas: Banca[] = [
		{
      id: "banca-lolzeiro",
      name: "Banca Lolzeiro",
      category: "Shoujo",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/bancas/banca_lolzeiro.png"
    },
    {
      id: "banca-lucia",
      name: "Banca Lucia",
      category: "Ecchi",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/bancas/banca_lucia.png"
    }
	];

  constructor() { }

  ngOnInit() {
  }

}
