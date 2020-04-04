import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailPComponent } from './detail-p/detail-p.component';
import { Pokemodel } from 'src/model/pokemodel';

@NgModule({
  declarations: [
    AppComponent,
    DetailPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Pokemodel],
  bootstrap: [AppComponent]
})
export class AppModule { }
