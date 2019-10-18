import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model'
@Component({
  selector: 'otk-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	paymentOptions: RadioOption[] =[
		{label: 'Dinheiro', value: 'MON'},
		{label: 'Cartão de Débito', value: 'DEB'}
	]


  constructor() { }

  ngOnInit() {
  }

}
