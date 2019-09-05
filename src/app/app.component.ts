import { Component } from '@angular/core';

@Component({
  selector: 'otk-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'OtakuStoreApp';
}

//APP.COMPONENT.TS => CLASSE
//DECORETOR É UMA FUNÇÃO QUE APLICA METADADOS A CLASSES, ATRIBUTOS, METODOS OU ARGUMENTOS DE METODOS
//IMPORTA OUTRO DECORATOR, COMO SELECTOR (NOME DO COMPONENTE, RAIZ DA APLICACAO), TEMPLATEURL (CARA
//DA MINHA APLICAÇÃO), CSS NÃO E OBRIGATÓRIO.
