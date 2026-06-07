# Fée de la Place — Site statique

Reproduction de [feedelaplace.fr](https://www.feedelaplace.fr) en HTML, CSS et JavaScript.

## Prévisualisation

```powershell
cd C:\Users\shows\feedelaplace
python -m http.server 8080
```

Ouvrir http://localhost:8080

## Images manquantes en local

Les visuels des formules « Place initiale / principale / grande place » pointent vers le site d’origine par défaut. Pour les copier en local :

```powershell
powershell -File scripts/download-images.ps1
```

Puis remplacer dans `css/style.css` les URLs `https://www.feedelaplace.fr/...` par `url("../assets/images/nom-fichier")`.

## Animations

- **Pulse** sur l’image d’accueil (comme Elementor)
- **slideInLeft** sur les pastilles de formules rangement (délais 600 / 1500 / 2400 ms)
- Formes SVG : courbes hero, vagues, bandeaux inclinés sur les blocs prestations

## Pages

14 pages dont `deroulement-rangement.html` (lien depuis la page Rangement).
