class Order{
	constructor(
		public address: string,
		public number: number,
		public optinalAddress: string,
		public paymentOption: string,
		public id: number,
		public orderItems: OrderItem[] = []
	){}
}

class OrderItem{
	constructor(public quantity: number,
							public menuId: string){}
}

export{Order, OrderItem}
