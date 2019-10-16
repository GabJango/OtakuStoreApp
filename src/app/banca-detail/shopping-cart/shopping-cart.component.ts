import { Component, OnInit } from '@angular/core';
import { ShoppingCartService} from './shopping-cart.service'
import { MenuItem } from '../menu-item/menu-item.model'
import { CartItem } from './cart-item.model'

@Component({
  selector: 'otk-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

	items(): any[]{
		return this.shoppingCartService.items;
	}

	total(): number{
		return this.shoppingCartService.total();
	}

	clear(){
		this.shoppingCartService.clear()
	}

	removeItem(item: any){
		this.shoppingCartService.removeItem(item);
	}

	addItem(item: any){
		this.shoppingCartService.addItem(item)
		console.log(item)
	}

}
