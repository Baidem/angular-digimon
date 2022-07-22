import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DigimonHomeComponent } from './digimon-home/digimon-home.component';
import { DigimonIndexComponent } from './digimon-index/digimon-index.component';
import { DigimonLevelComponent } from './digimon-level/digimon-level.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DigimonTableComponent } from './digimon-table/digimon-table.component';
import { DigimonTableByLevelComponent } from './digimon-table-by-level/digimon-table-by-level.component';
import { DigimonCarouselComponent } from './digimon-carousel/digimon-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DigimonHomeComponent,
    DigimonIndexComponent,
    DigimonLevelComponent,
    DigimonTableComponent,
    DigimonTableByLevelComponent,
    DigimonCarouselComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
