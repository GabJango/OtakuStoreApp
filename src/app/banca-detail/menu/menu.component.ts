import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BancasService } from '../../bancas/bancas.service'
import { MenuItem } from '../menu-item/menu-item.model'
import { Observable } from 'rxjs'

@Component({
  selector: 'otk-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

	menu: Observable<MenuItem[]>

  constructor(private bancasService: BancasService,
							 private route: ActivatedRoute) { }

  ngOnInit() {
		this.menu = this.bancasService
		.menuOfBancas(this.route.parent.snapshot.params['id'])
  }

		addMenuItem(item: MenuItem){
			console.log(item)
		}
}
