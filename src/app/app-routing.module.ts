import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonHomeComponent } from "./digimon-home/digimon-home.component";
import { DigimonIndexComponent } from "./digimon-index/digimon-index.component";
import { DigimonLevelComponent } from "./digimon-level/digimon-level.component";
import { DigimonTableComponent } from "./digimon-table/digimon-table.component";
import { DigimonTableByLevelComponent } from "./digimon-table-by-level/digimon-table-by-level.component";
import { DigimonCarouselComponent } from "./digimon-carousel/digimon-carousel.component";



const routes: Routes = [
   { path: '', component: DigimonCarouselComponent },
   { path: 'home', component: DigimonHomeComponent },
   { path: 'table', component: DigimonTableComponent },
   { path: 'digidex', component: DigimonIndexComponent },
   { path: 'digidex/:digimonLevel', component: DigimonLevelComponent },
   { path: 'digidex/table/:digimonLevel', component: DigimonTableByLevelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
