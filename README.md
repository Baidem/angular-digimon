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









ng new angular-digimon

? Would you like to add Angular routing? (y/N) Y

? Which stylesheet format would you like to use? (Use arrow keys)
  CSS
> SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]

// création automatique du projet

cd angular-digimon

ng serve --open

? Port 4200 is already in use.
Would you like to use a different port? (Y/n) y


** Angular Live Development Server is listening on localhost:56881, open your browser on http://localhost:56881/ **


√ Compiled successfully.

// le projet s'ouvre dans le navigateur via localhost
// tout les dossiers et fichiers par defaut sont dans le repertoire ./angular-digimon

ctrl C : pour stopper le serveur

Ouvrir Git Bash

aller dans le répertoire parent du projet

cd eclipse-worhspace

retourner sur github et récupérer le lien du clone du projet

sur git bash tapper la commande

git clone <coller lien du clone>

le projet github est télécharger dans le repertoire ./angular-digimon

copier tous les dossiers et fichiers du répertoire ./angular-digimon-   SAUF dossier .git

coller dans répertoire ./angular-digimon

Sur Git Bash 

aller sur le répertoire ./angular-digimon

git status

git add .

git commit -m "message"

git push

Dans PowerShell aller sur le répertoire ./angular-digimon

relancer : ng serve --open

Ouvrir le projet sur VS code

ouvrir un nouveau PowerShell

Aller au répertoire ./angular-digimon

créer le component digimon-index avec la commande

ng g c digimon-index

ng g c navbar

installer bootstrap tapper la commande
npm i bootstrap

Créer dossier ./src/styles
dans le dossier créer les fichiers :
 general.scss  (pour code scss général : body ...)
 _variables.scss (pour les variables scss)
 
Dans le fichier styles.scss faire les imports : 
@import "~bootstrap"; (pour profité du 
@import "styles/variables";
@import "styles/general";

Créer nouveau dossier ./src/services
puis cmd : cd services
Créer les services :
http-digimon.services
url-api-constantes

avec les commandes :
ng g s http-digimon.services
ng g s url-api-constantes














