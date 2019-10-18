import { Component, OnInit, Input, ContentChild, AfterContentInit} from '@angular/core';
import {NgModel} from '@angular/forms'

@Component({
  selector: 'otk-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit{

	input:any

	@Input() label: string
	@Input() errorMessage: string

	//como parametro uma referencia a um elemento ou uma diretiva
	@ContentChild(NgModel, {static: false}) model: NgModel

  constructor() { }

  ngOnInit() {
  }

	ngAfterContentInit(){
		//chamado quando o conteudo é definido
		this.input = this.model
		if(this.input === undefined){
			throw new Error ('Esse componente precisa ser usado com uma diretiva NgModel')
		}
	}

	hasSuccess(): boolean{
		return this.input.valid && (this.input.dirty || this.input.touched )
	}

	hasError(): boolean{
		return this.input.invalid && (this.input.dirty || this.input.touched )
	}
}
