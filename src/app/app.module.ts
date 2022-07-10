import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DigimonHomeComponent } from './digimon-home/digimon-home.component';
import { DigimonIndexComponent } from './digimon-index/digimon-index.component';
import { DigimonLevelComponent } from './digimon-level/digimon-level.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DigimonHomeComponent,
    DigimonIndexComponent,
    DigimonLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
