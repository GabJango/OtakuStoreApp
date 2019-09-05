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

@Injectable()

// está é a classe que acessa o backend
export class BancasService {
							// receber injeção do servico http
	constructor(private http: HttpClient){}
// criando um método que representa meus dados dentro da classe
	bancas(): Observable<Banca[]> {
		// retornando os dados usando metodo get usando a sintaxe de template strings para concatenar o endereço na contstante BANCA_API
		// retornando um http usando metodo get observable json
		return this.http.get<Banca[]>(`${BANCA_API}/bancas`);
	}
}
