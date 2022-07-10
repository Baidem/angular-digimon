# angular-digimon

### ouvrir windows PowerShell

cd angular-digimon

### Installer npm (npm is the package manager for the Node JavaScript platform.)
npm install
npm version

### installer bootstrap tapper la commande
npm i bootstrap

### Nouveaux dossiers :
./src/services
./src/styles
./src/models

### Nouveaux fichiers :
./src/styles/_variables.scss
./src/styles/general.scss

### Dans .src/styles.scss importer :
@import "~bootstrap";
@import "styles/variables";
@import "styles/general";


### Ajouter une coleur de font dans ./src/styles/general.scss
ex:
body {
    background: #7fa6f0;;
}

### Créer les components :
digimon-home
digimon-index
digimon-level
navbar

avec cmd :
ng g c digimon-home
ng g c di...etc 

### Dans app-routing.module.ts
importer :

import { DigimonHomeComponent } from "./digimon-home/digimon-home.component";
import { DigimonIndexComponent } from "./digimon-index/digimon-index.component";
import { DigimonLevelComponent } from "./digimon-level/digimon-level.component";

const routes: Routes = [
   { path: '', component: DigimonHomeComponent },
   { path: 'digidex', component: DigimonIndexComponent },
   { path: 'level', component: DigimonLevelComponent }

];


### Dans app.component.html
Ajouter le "selector" du component navbar avec la balise: 

<app-navbar></app-navbar>

### Dans navbar.component.html
Faire le code html de la nav bar (on peut adapter un model de bootstrap5)

ex:
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="">Home</a>
        <a class="navbar-brand" routerLink="digidex">DigiDex</a>
        <a class="navbar-brand" routerLink="level">Level</a>
      </div>
    </nav>
</header> 

les liens routerLink fonctionnent grâce aux imports et path fait précédemment dans app-routing.module.ts


### Ajouter une image 
ex: 
dans digimon-home.component.html ajouter la balise :
    
	<img src="assets/digiadven99_4suw.jpg" class="img-fluid">

### Créer un interface digimon.ts
Dans PowerShell aller dans le répertoire models créer l'interface avec la cmd :
ng g i digimon

Dans digimon.ts coder:

export interface Digimon {
    img: string;
    level: string;
    name: string;
}


### Créer un Service http-digimon
Dans PowerShell aller dans répertoire services et lancer la commande :
ng g s http-digimon

puis implémenter getDigimons() et get DigimonsByLevel()

### Dans digimon-index.component.ts
implémenter ngOnInit(), ngAfterViewInit() et ngOnDestroy()

### Note débug
Il manquait des imports dans app.module.ts :

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

Ps utiliser l'autocomplétion pour que ça complète les imports en haut de page.















