import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model'

import {OrderService} from './order.service';
import {CartItem} from '../banca-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';

@Component({
  selector: 'otk-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	delivery: number = 8

		paymentOptions: RadioOption[] = [
			{label: 'Dinheiro', value: 'MON'},
			{label: 'Cartão de Débito', value: 'DEB'},
		]

	constructor(private orderService: OrderService) { }

	ngOnInit() {
	}

	itemsValue(): number{
	return this.orderService.itemsValue()
	}

	cartItems(): CartItem[]{
	return this.orderService.cartItems()
	}

	increaseQty(item: CartItem){
	this.orderService.increaseQty(item)
	}

	decreaseQty(item: CartItem){
	this.orderService.decreaseQty(item)
	}

	remove(item: CartItem){
	this.orderService.remove(item)
	}

	checkOrder(order: Order){
		order.orderItems = this.cartItems()
		.map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id_name))
		console.log(order)
		this.orderService.checkOrder(order).subscribe(()=>{
			console.log(`Compra efetuada com sucesso ${order.id}`)
			this.orderService.clear()
		})
	}

}
