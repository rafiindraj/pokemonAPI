import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { PokedetailComponent } from './components/pokelist/pokedetail/pokedetail.component';


const routes: Routes = [
  { path: "", component: PokelistComponent },
  { path: 'detail/:id', component: PokedetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
 
