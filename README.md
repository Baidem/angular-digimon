# angular-digimon

ouvrir windows PowerShell

cd angular-digimon-

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














