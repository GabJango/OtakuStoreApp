import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando o componente HomeComponent onde está sendo usado para criar a rota da página principal
import { HomeComponent } from './home/home.component'
//Importando o componente AboutComponent
import { AboutComponent } from './about/about.component'
//Importando o componente BancasComponent
import { BancasComponent } from './bancas/bancas.component'

const routes: Routes = [
	// Quando criados uma rota vázia estamos dizendo ao angular que aquela é nossa rota principal ("home") sendo esse o primeiro componente
	{path: '', component: HomeComponent},
	// Segundo componente
	{path: 'about', component: AboutComponent},
	// Terceiro compnente
	{path: 'bancas', component: BancasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
