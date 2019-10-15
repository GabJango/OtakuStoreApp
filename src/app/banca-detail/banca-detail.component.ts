import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { BancasService } from '../bancas/bancas.service'

import { Banca } from '../bancas/banca/banca.model'
@Component({
  selector: 'otk-banca-detail',
  templateUrl: './banca-detail.component.html'
})
export class BancaDetailComponent implements OnInit {

	banca: Banca
  constructor(private bancasService: BancasService,
							private route: ActivatedRoute) { }

  ngOnInit() {
		//snapshot foto do momento do meu acesso
		// params é um objeto que contém o valor dos meus parametros
		this.bancasService.bancaById(this.route.snapshot.params['id'])
		.subscribe(banca => this.banca = banca)
  }

}
