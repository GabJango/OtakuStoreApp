import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando o componente HomeComponent onde está sendo usado para criar a rota da página principal
import { HomeComponent } from './home/home.component'
//Importando o componente AboutComponent
import { AboutComponent } from './about/about.component'
//Importando o componente BancasComponent
import { BancasComponent } from './bancas/bancas.component'

import { BancaDetailComponent } from './banca-detail/banca-detail.component'

import { ReviewsComponent } from './banca-detail/reviews/reviews.component'

import { MenuComponent } from './banca-detail/menu/menu.component'

import { OrderComponent } from './order/order.component'

const routes: Routes = [
	// Quando criados uma rota vázia estamos dizendo ao angular que aquela é nossa rota principal ("home") sendo esse o primeiro componente
	{path: '', component: HomeComponent},
	// Segundo componente
	{path: 'about', component: AboutComponent},
	// Terceiro compnente
	{path: 'bancas', component: BancasComponent},
	// indicar um parametro com ":"
	{path: 'bancas/:id', component: BancaDetailComponent,
		//Criando componentes  filhos para a página em especifico
		// esses dois componentes são são acionados se forem /id/menu ou /id/reviews
		// para melhor link amigavel teremos apenas /id/ deixando o componente padrão
		children: [
			{path: '', redirectTo: 'menu', pathMatch: 'full'},
			{path: 'menu', component: MenuComponent},
			{path: 'reviews', component: ReviewsComponent},
		]
	},
	{path: 'order', component: OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
