import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model'

@Component({
  selector: 'otk-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

	@Input() menuItem: MenuItem
	@Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

//criando metodo, que por sua vez passa um objeto,
//quando eu emito um evento dizendo que aquele menu-item foi cliando o compnente
//parente pode associar a ação e fazer algo
//"EU TO CLIANDO NO BOTÂO, esse evento ele emite"
	emitAddEvent(){
		this.add.emit(this.menuItem)
	}
}
