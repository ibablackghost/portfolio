# 🚀 Portfolio de Papa Ibrahima Diagne

Un portfolio incroyable et moderne construit avec React, TypeScript et Framer Motion.

## ✨ Fonctionnalités

- **Design Moderne** : Interface élégante avec des dégradés et animations fluides
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations Avancées** : Animations fluides avec Framer Motion
- **Performance** : Construit avec Vite pour un développement rapide
- **TypeScript** : Code type-safe et maintenable
- **Composants Modulaires** : Architecture React moderne

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Framer Motion** - Animations avancées
- **Lucide React** - Icônes modernes
- **CSS3** - Styles avancés avec variables CSS

## 🚀 Installation

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Navigation principale
│   ├── Hero.tsx        # Section d'accueil
│   ├── About.tsx       # À propos
│   ├── Skills.tsx      # Compétences
│   ├── Projects.tsx    # Projets
│   └── Contact.tsx     # Contact
├── App.tsx             # Composant principal
├── App.css             # Styles globaux
├── index.css           # Styles de base
└── main.ts             # Point d'entrée
```

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `src/index.css` :
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### Contenu
- **Header** : Modifiez les liens de navigation dans `Header.tsx`
- **Hero** : Personnalisez le titre et la description dans `Hero.tsx`
- **About** : Adaptez les statistiques et descriptions dans `About.tsx`
- **Skills** : Ajoutez/modifiez les compétences dans `Skills.tsx`
- **Projects** : Personnalisez vos projets dans `Projects.tsx`
- **Contact** : Mettez à jour les informations de contact dans `Contact.tsx`

## 📱 Sections du Portfolio

### 🏠 Accueil (Hero)
- Présentation personnelle
- Call-to-action
- Liens sociaux
- Animations d'entrée

### 👨‍💻 À Propos
- Description personnelle
- Statistiques (projets, expérience)
- Fonctionnalités clés
- Animations au scroll

### 🛠️ Compétences
- Catégories de compétences
- Barres de progression animées
- Technologies favorites
- Filtres interactifs

### 🚀 Projets
- Projets en vedette (carousel)
- Grille de projets
- Filtres par catégorie
- Liens vers GitHub et démos

### 📞 Contact
- Formulaire de contact
- Informations de contact
- Liens sociaux
- Validation en temps réel

## 🎯 Fonctionnalités Avancées

### Animations
- **Framer Motion** pour des animations fluides
- **Scroll animations** avec intersection observer
- **Hover effects** sur tous les éléments interactifs
- **Loading states** pour les formulaires

### Responsive Design
- **Mobile First** approach
- **Breakpoints** optimisés
- **Touch-friendly** interfaces
- **Performance** sur tous les appareils

### Performance
- **Lazy loading** des composants
- **Optimized images** avec placeholders
- **CSS optimizations** avec variables
- **Bundle splitting** avec Vite

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Uploader le dossier dist/ sur Netlify
```

### GitHub Pages
```bash
npm run build
# Configurer GitHub Actions pour le déploiement automatique
```

## 📝 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Aperçu du build de production
- `npm run lint` - Vérification du code

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [React](https://reactjs.org/) - Bibliothèque UI
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icônes
- [Vite](https://vitejs.dev/) - Build tool

---

**Créé avec ❤️ et beaucoup de café ☕**
