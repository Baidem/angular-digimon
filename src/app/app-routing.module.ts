import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonHomeComponent } from "./digimon-home/digimon-home.component";
import { DigimonIndexComponent } from "./digimon-index/digimon-index.component";
import { DigimonLevelComponent } from "./digimon-level/digimon-level.component";


const routes: Routes = [
   { path: '', component: DigimonHomeComponent },
   { path: 'digidex', component: DigimonIndexComponent },
   { path: 'level', component: DigimonLevelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
