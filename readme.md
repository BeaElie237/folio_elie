# 🚀 Portfolio Elie Bea - Data Engineer

Portfolio professionnel moderne avec effet de particules animées, conçu pour un Data Engineer / Data Scientist / Data Analyst.

## ✨ Fonctionnalités

### 🎨 Design & Animations
- **Particules animées en arrière-plan** (Particles.js) - Effet immersif et interactif
- Animations au scroll (fade-in, compteurs, etc.)
- Design moderne et responsive
- Mode sombre/clair
- Thème de couleurs personnalisable

### 📱 Sections
1. **Hero** - Présentation avec liens sociaux
2. **À propos** - Expertise et statistiques
3. **Compétences** - Stack technologique complet
4. **Certifications** - Reconnaissances professionnelles (NOUVELLE SECTION !)
5. **Projets** - Portfolio de projets data
6. **Contact** - Formulaire de contact

### 🌍 Fonctionnalités
- ✅ Multilingue (Français/Anglais)
- ✅ Menu mobile responsive
- ✅ Bouton WhatsApp flottant
- ✅ Bouton scroll to top
- ✅ Modal de confirmation
- ✅ Animations fluides
- ✅ SEO optimisé

## 📁 Structure des fichiers

```
portfolio/
│
├── index.html          # Structure HTML
├── style.css           # Styles CSS
├── script.js           # JavaScript & Particles
│
└── images/             # Dossier des images (à créer)
    ├── skills/         # Logos des compétences
    │   ├── python.png
    │   ├── spark.png
    │   ├── database.png
    │   └── ...
    │
    └── projects/       # Images des projets
        ├── pipeline.jpg
        ├── ml-model.jpg
        ├── dashboard.jpg
        └── ...
```

## 🎯 Installation

1. **Téléchargez les fichiers** : `index.html`, `style.css`, `script.js`

2. **Créez le dossier images** :
   ```
   mkdir -p images/skills
   mkdir -p images/projects
   ```

3. **Ajoutez vos images** :
   - Logos des compétences dans `images/skills/`
   - Photos des projets dans `images/projects/`

4. **Ouvrez `index.html`** dans votre navigateur !

## 🔧 Personnalisation

### Modifier les couleurs
Dans `style.css`, changez les variables CSS :
```css
:root {
    --primary: #6366F1;      /* Couleur principale */
    --secondary: #EC4899;    /* Couleur secondaire */
    --accent: #14B8A6;       /* Couleur accent */
}
```

### Ajouter/Modifier des certifications
Dans `index.html`, dupliquez une carte de certification :
```html
<div class="certification-card fade-in">
    <div class="cert-badge">
        <i class="fab fa-aws"></i>  <!-- Icône -->
    </div>
    <div class="cert-info">
        <span class="cert-provider">Nom du Provider</span>
        <h3 class="cert-title">Nom de la Certification</h3>
        <!-- ... -->
    </div>
</div>
```

### Modifier les particules
Dans `script.js`, ajustez la configuration :
```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },  // Nombre de particules
        color: { value: ['#6366F1', '#EC4899'] },  // Couleurs
        // ...
    }
});
```

### Ajouter vos informations
Modifiez dans `index.html` :
- Liens sociaux (LinkedIn, GitHub, Twitter, Kaggle)
- Numéro WhatsApp
- Email de contact
- Localisation

## 📦 Dépendances externes

Le portfolio utilise des CDN (pas besoin d'installation) :
- **Font Awesome** (icônes)
- **Google Fonts** (typographie)
- **Particles.js** (effet de particules)

## 🌐 Déploiement

### GitHub Pages
1. Créez un repo GitHub
2. Uploadez les fichiers
3. Activez GitHub Pages dans Settings

### Netlify / Vercel
1. Drag & drop le dossier complet
2. Le site est déployé automatiquement !

## 🎨 Images recommandées

### Pour les compétences (`images/skills/`)
- Format : PNG avec fond transparent
- Taille : 256x256 pixels minimum
- Noms : `python.png`, `spark.png`, `ml.png`, etc.

### Pour les projets (`images/projects/`)
- Format : JPG ou PNG
- Dimensions : 800x600 pixels
- Noms : `pipeline.jpg`, `dashboard.jpg`, etc.

## 💡 Astuces

1. **Performance** : Compressez vos images (TinyPNG)
2. **SEO** : Modifiez le titre et les meta tags
3. **Analytics** : Ajoutez Google Analytics si besoin
4. **Formulaire** : Connectez à un service (Formspree, EmailJS)

## 📝 TODO / Améliorations futures

- [ ] Connecter le formulaire à un backend
- [ ] Ajouter section Blog
- [ ] Animation de typing effect sur le titre
- [ ] Mode PWA (Progressive Web App)
- [ ] Section Témoignages clients

## 🐛 Dépannage

**Les particules ne s'affichent pas ?**
→ Vérifiez que `particles.js` est bien chargé depuis le CDN

**Les images ne s'affichent pas ?**
→ Vérifiez les chemins dans `index.html` (dossier `images/`)

**Le menu mobile ne fonctionne pas ?**
→ Vérifiez que `script.js` est bien chargé

## 📄 Licence

Libre d'utilisation pour un usage personnel ou commercial.

## 👨‍💻 Auteur

**Elie Bea**
- Portfolio: [Votre URL]
- LinkedIn: [Votre LinkedIn]
- GitHub: [Votre GitHub]

---

**Bon développement ! 🚀**

*Transformez vos données en insights actionnables* 📊