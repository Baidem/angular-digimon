import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonHomeComponent } from "./digimon-home/digimon-home.component";
import { DigimonIndexComponent } from "./digimon-index/digimon-index.component";
import { DigimonLevelComponent } from "./digimon-level/digimon-level.component";
import { DigimonTableComponent } from "./digimon-table/digimon-table.component";



const routes: Routes = [
   { path: '', component: DigimonHomeComponent },
   { path: 'home', component: DigimonHomeComponent },
   { path: 'table', component: DigimonTableComponent },
   { path: 'digidex', component: DigimonIndexComponent },
   { path: 'digidex/:digimonLevel', component: DigimonLevelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
