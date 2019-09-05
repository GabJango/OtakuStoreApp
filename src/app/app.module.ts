//APP.MODULES.TS => CLASSE (modulo do angular)

import { BrowserModule } from '@angular/platform-browser';
// NGMODULE => DECORETOR
import { NgModule } from '@angular/core';

// importando modulo HTTP para utilização declarar na lista de declarations
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BancasComponent } from './bancas/bancas.component';
import { BancaComponent } from './bancas/banca/banca.component';
// Declaramos o bancasService para o angular reconhecer o provider
import { BancasService } from './bancas/bancas.service'

//Declarations => Todos os componentes dentro da aplicação
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BancasComponent,
    BancaComponent
  ],
// Imports => oque nos vamos usar, quais são nossas dependências
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
// bootsrap => dentro do array de declarations qual é o responsável por fazer o bootstrap da aplicação
  providers: [BancasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
