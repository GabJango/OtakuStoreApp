//APP.MODULES.TS => CLASSE (modulo do angular)

import { BrowserModule } from '@angular/platform-browser';
// NGMODULE => DECORETOR
import { NgModule, LOCALE_ID } from '@angular/core';

import { FormsModule } from '@angular/forms'

//alterar lingua padrão
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
registerLocaleData(localept, 'pt');

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
import { BancasService } from './bancas/bancas.service';
import { BancaDetailComponent } from './banca-detail/banca-detail.component';
import { MenuComponent } from './banca-detail/menu/menu.component';
import { ShoppingCartComponent } from './banca-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './banca-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './banca-detail/reviews/reviews.component'
import {ShoppingCartService} from './banca-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component'
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { RatingComponent } from './shared/rating/rating.component'
//Declarations => Todos os componentes dentro da aplicação
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BancasComponent,
    BancaComponent,
    BancaDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSumaryComponent,
    RatingComponent
  ],
// Imports => oque nos vamos usar, quais são nossas dependências
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		FormsModule
  ],
// bootsrap => dentro do array de declarations qual é o responsável por fazer o bootstrap da aplicação
  providers: [BancasService, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
