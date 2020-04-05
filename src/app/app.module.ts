import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pokemodel } from 'src/model/pokemodel';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { PokedetailComponent } from './components/pokelist/pokedetail/pokedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokedetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Pokemodel],
  bootstrap: [AppComponent]
})
export class AppModule { }
