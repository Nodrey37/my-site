# my-site

Ma page perso, réalisée avant la rentrée en formation **CDA** (Concepteur Développeur d'Applications).

Une petite page web statique qui raconte qui je suis, d'où je viens (10 ans en Office de Tourisme, webmaster du site Azay Chinon Val de Loire) et où je vais (la reconversion vers le développement d'applications).

## Voir le site

👉 **https://nodrey37.github.io/my-site/**

Le site est hébergé gratuitement avec GitHub Pages.

## Contenu de la page

- **Qui suis-je** : une courte présentation
- **D'où je viens** : mon parcours dans le tourisme et le web
- **Où je vais** : mes objectifs, mes trois qualités et le programme de la reconversion

## Structure du dépôt

```
my-site/
├── index.html           # La page (structure et contenu)
├── style-page-ete.css   # Les styles de la page
├── script.js            # Script JavaScript de test (console)
├── retest.js            # Exercice : fonction min() et ses tests (Node.js)
├── images/              # Logos et photo de l'Office de Tourisme
└── .gitignore
```

## Lancer le site en local

Le projet est 100 % statique : pas de dépendance, pas d'installation, pas de build.

**1. Récupérer le dépôt**

```bash
git clone https://github.com/Nodrey37/my-site.git
cd my-site
```

**2. Ouvrir la page**

- Le plus simple : double-cliquer sur `index.html` pour l'ouvrir dans le navigateur.
- Avec un petit serveur local (au choix) :
  - extension **Live Server** de VS Code (clic droit sur `index.html` puis *Open with Live Server*) ;
  - ou, si Python est installé :

    ```bash
    python -m http.server 8000
    ```

    puis aller sur http://localhost:8000.

> La police *Oswald* est chargée depuis Google Fonts : il faut donc une connexion internet pour la voir s'afficher.

## Lancer l'exercice `retest.js`

Ce fichier contient une fonction `min(a, b)` accompagnée de tests écrits avec le module `assert` de Node.js. Il n'a aucun lien avec la page web.

```bash
node retest.js
```

Si tous les tests passent, le script affiche 🎉.

## Technologies

- HTML5
- CSS3 (flexbox, grid)
- JavaScript (exercices)
- Google Fonts (Oswald)
- GitHub Pages pour l'hébergement

## Auteure

Audrey Vayer, [@Nodrey37](https://github.com/Nodrey37)
