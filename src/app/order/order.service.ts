import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { map} from 'rxjs/operators'
import {ShoppingCartService} from '../banca-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../banca-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model'
import {BANCA_API} from '../app.api'
@Injectable()
export class OrderService {

constructor(private cartService: ShoppingCartService,
						private http: HttpClient){}

	itemsValue(): number{
		return this.cartService.total()
	}

	cartItems(): CartItem[]{
		return this.cartService.items
	}

	increaseQty (item: CartItem){
			this.cartService.increaseQty(item)
	}

	 decreaseQty(item: CartItem){
		 this.cartService.decreaseQty(item)
	 }

 remove(item: CartItem){
	 this.cartService.removeItem(item)
 }

 clear(){
	 this.cartService.clear()
 }

 checkOrder(order: Order): Observable<string>{
	const headers = new HttpHeaders()
	headers.append('Content-type', 'application/json')
	return this.http.post<string>(`${BANCA_API}/order/order_insert.php`, JSON.stringify(order), {headers: headers})
		.pipe(map((res) =>{ return res}))
}

	getIPAddress()
	{
			return this.http.get("http://api.ipify.org/?format=json").pipe(map((res) =>{ return res['ip']}));
	}


}
