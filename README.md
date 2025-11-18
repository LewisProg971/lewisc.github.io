# Portfolio Développeur Full Stack

Un portfolio moderne et responsive pour développeur full stack encore en études, avec un design élégant en noir et blanc.

## 🚀 Aperçu

Ce portfolio présente mes compétences, formations, réalisations et ma veille technologique de manière professionnelle et accessible.

### Fonctionnalités

- **Design responsive** - S'adapte à tous les écrans (desktop, tablette, mobile)
- **Thème noir et blanc** - Design moderne et épuré
- **Navigation fluide** - Menu horizontal avec smooth scrolling
- **Animations subtiles** - Effets au scroll pour une expérience utilisateur agréable
- **Contact simplifié** - Coordonnées cliquables sans formulaire complexe

## 📋 Sections

1. **À propos** - Présentation personnelle et compétences techniques
2. **Formations** - Parcours académique et certifications
3. **Réalisations** - Projets développés avec technologies utilisées
4. **Veille Technologique** - Sources et domaines de veille
5. **Contact** - Coordonnées directes (email, LinkedIn, GitHub, téléphone)

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec Grid et Flexbox
- **JavaScript** - Interactivité et animations
- **Design responsive** - Media queries pour tous les écrans

## 📁 Structure du projet

```
portfolio_dev/
├── index.html              # Page principale
├── css/
│   └── style.css          # Feuille de styles
├── js/
│   └── main.js            # Scripts JavaScript
└── README.md              # Documentation
```

## 🚀 Installation et utilisation

### Option 1 : Live Server (Recommandée)

1. Installez l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"
4. Le portfolio s'ouvre automatiquement dans votre navigateur

### Option 2 : Python

```bash
cd portfolio_dev
python -m http.server 8000
```
Puis ouvrez `http://localhost:8000`

### Option 3 : Node.js

```bash
cd portfolio_dev
npx http-server
```

### Option 4 : Fichier local

Double-cliquez directement sur `index.html`

## ✏️ Personnalisation

### Modifier les informations personnelles

1. **Coordonnées** - Section `#contact` dans `index.html`
2. **Formations** - Section `#education` 
3. **Projets** - Section `#projects`
4. **Compétences** - Section `#about`

### Exemple de modification des coordonnées :

```html
<div class="contact-item">
    <h3>Email</h3>
    <a href="mailto:mon.email@exemple.com">mon.email@exemple.com</a>
</div>
```

### Ajouter un nouveau projet :

```html
<div class="project-card">
    <h3>Nom du projet</h3>
    <p>Description détaillée du projet.</p>
    <div class="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>PostgreSQL</span>
    </div>
    <div class="project-links">
        <a href="https://lien-vers-demo.com" target="_blank">Voir le projet</a>
        <a href="https://github.com/username/repo" target="_blank">Code source</a>
    </div>
</div>
```

## 🎨 Couleurs du thème

- **Arrière-plan principal** : `#000000` (Noir)
- **Arrière-plan alternatif** : `#111111` (Noir léger)
- **Cartes et éléments** : `#222222` (Gris foncé)
- **Bordures** : `#333333` (Gris moyen)
- **Texte principal** : `#ffffff` (Blanc)
- **Texte secondaire** : `#cccccc` (Gris clair)

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints à :
- **768px** - Tablettes
- **480px** - Mobiles

Le menu devient un hamburger menu sur mobile pour une meilleure expérience utilisateur.

## ✨ Fonctionnalités JavaScript

- **Navigation smooth** - Défilement fluide entre les sections
- **Menu mobile** - Hamburger menu responsive
- **Animations au scroll** - Apparition progressive des éléments
- **Gestion des liens** - Ouverture des liens externes dans de nouveaux onglets

## 🔧 Développement futur

Améliorations possibles :
- [ ] Mode sombre/clair
- [ ] Animations plus avancées
- [ ] Section blog
- [ ] Système de traduction
- [ ] Intégration d'un CMS headless

## 📄 Licence

Ce projet est libre d'utilisation pour des fins personnelles et éducatives.

## 📞 Contact

Pour toute question concernant ce portfolio :
- Email : [Votre email]
- LinkedIn : [Votre profil LinkedIn]
- GitHub : [Votre profil GitHub]

---

**Note** : N'oubliez pas de personnaliser toutes les informations avec vos vraies coordonnées et expériences !