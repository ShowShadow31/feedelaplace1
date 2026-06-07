const NAV_ITEMS = [
  { href: "rangement.html", label: "Rangement", page: "rangement" },
  { href: "tri.html", label: "Tri", page: "tri" },
  { href: "accompagnements.html", label: "Accompagnements", page: "accompagnements" },
  { href: "tarifs.html", label: "Tarifs", page: "tarifs" },
  { href: "a-propos.html", label: "A propos", page: "a-propos" },
];

const ICON_PHONE = `<svg aria-hidden="true" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/></svg>`;
const ICON_MAIL = `<svg aria-hidden="true" viewBox="0 0 576 512"><path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"/></svg>`;
const ICON_FB = `<svg aria-hidden="true" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>`;

function starSvg() {
  return `<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>`;
}

function renderHeader(activePage) {
  const navLinks = NAV_ITEMS.map(
    (item) =>
      `<li><a href="${item.href}"${item.page === activePage ? ' class="active"' : ""}>${item.label}</a></li>`
  ).join("");

  return `
    <header class="site-header">
      <div class="header-inner">
        <a href="index.html" class="logo" aria-label="Fée de la Place — Accueil">
          <img src="assets/images/logofeedelaplace.png" alt="Fée de la Place" width="200" height="98">
        </a>
        <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="Navigation principale">
          <ul>${navLinks}</ul>
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="site-footer" id="footer">
      <div class="container">
        <div class="footer-logo">
          <img src="assets/images/logofeedelaplace.png" alt="Fée de la Place" width="1024" height="501">
        </div>
        <div class="footer-grid">
          <div>
            <h2>Me contacter</h2>
            <ul class="contact-list">
              <li><span class="icon">${ICON_PHONE}</span><span>07 49 12 37 07</span></li>
              <li><span class="icon">${ICON_MAIL}</span><span>feedelaplace@gmail.com</span></li>
              <li><span class="icon">${ICON_FB}</span><a href="https://www.facebook.com/FeeDeLaPlace39" target="_blank" rel="noopener">Fée de la Place 39</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h2>Mes services</h2>
            <p><a href="tarifs.html">&gt; tarifs et prestations</a></p>
            <p><a href="secteur-intervention.html">&gt; secteur d'intervention</a></p>
            <p><a href="conditions-generales-de-vente.html">&gt; Conditions Générales de Vente</a></p>
          </div>
          <div class="footer-links">
            <h2>Mes propositions</h2>
            <p><a href="echange-de-services.html">&gt; échange de services</a></p>
            <p><a href="offre-parrainage.html">&gt; offre parrainage</a></p>
            <p><a href="bon-cadeau.html">&gt; bon cadeau</a></p>
          </div>
          <div class="footer-links">
            <h2>Autres informations</h2>
            <p><a href="a-propos.html">&gt; qui suis-je ?</a></p>
            <p><a href="mentions-legales.html">&gt; mentions légales</a></p>
            <p><a href="politique-confidentialite.html">&gt; politique de confidentialité</a></p>
          </div>
        </div>
        <p class="footer-bottom"><strong>Copyright © 2021 – Fée de la Place</strong></p>
      </div>
    </footer>
    <a href="#" id="scroll-top" aria-label="Retour en haut de page">↑</a>`;
}

function initLayout(activePage) {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();
}

const FONTS_LINK = 'https://fonts.googleapis.com/css2?family=Gantari:wght@400;500;600&family=Rancho&family=Righteous&family=Roboto:wght@400;700&family=Rochester&display=swap';

window.starSvg = starSvg;
window.FONTS_LINK = FONTS_LINK;
