// importando Observable porque todos os metodos da api http retorna objeto Observable da biblioteca RXJS
import { Observable } from 'rxjs';

// importando a interface BANCA para ser utilizada
import { Banca } from './banca/banca.model'

// importando a constante BANCA_API que contém o localhost  do json-server
import { BANCA_API } from '../app.api'

//importar o serviço httpClient do angular para ser utilizado consumindo os dados do json-server
import { HttpClient } from '@angular/common/http'

//para uma classe de serviço receber outros serviço via dependencia precisamos importar o decorator
import { Injectable } from '@angular/core'

import {MenuItem} from '../banca-detail/menu-item/menu-item.model'


// HEADERS PARA utilzar quando necessário GET utilizando Authorization
//
//const httpOptions = {
//  headers: new HttpHeaders({
//		'Content-Type': 'application/json',
//    'Accept': 'application/json',
//		'Access-Control-Allow-Origin': '*',
//	  'Authorization': 'Basic ODY3ODAzMDUtNmI1MS00ZTllLWIzNzYtM2JkMTE1NmI3NzNiLWJsdWVtaXg6NmNiMWM1MGQwYTBmZDhjZWNmMGRhN2I2M2I0MTVlYTM2N2IzMjgwNjU3YWE0YjM5NzA2ZTg4ZTcxODFjMzlhMw=='
//  })
//};

@Injectable()

// está é a classe que acessa o backend
export class BancasService {
							// receber injeção do servico http
	constructor(private http: HttpClient){}

// criando um método que representa meus dados dentro da classe
	bancas(): Observable<Banca[]> {
		// retornando os dados usando metodo get usando a sintaxe de template strings para concatenar o endereço na contstante BANCA_API
		// retornando um http usando metodo get observable json
		//return this.http.get<Banca[]>(`${BANCA_API}/bancas/e51b6a89d1dd2822adcb702a37f9e91b`, httpOptions) /bancas/read.php
     return this.http.get<Banca[]>(`${BANCA_API}/bancas/read_bancas.php`)
	}

	bancaById(id: string): Observable<Banca> {
		// retornando dados usando ID especifico para cada banca.
     return this.http.get<Banca>(`${BANCA_API}/bancas/read_bancas_one.php?id=${id}`)
	}

	ReviewsOfBanca(id: string): Observable<any[]> {
		// retornando dados usando ID especifico para cada banca.
		 return this.http.get<any[]>(`${BANCA_API}/reviews/read_reviews.php?id=${id}`)
	}

	menuOfBancas(id: string): Observable<MenuItem[]>{
		return this.http.get<MenuItem[]>(`${BANCA_API}/list_mangas/read_list_mangas.php?id=${id}`)
	}
}
