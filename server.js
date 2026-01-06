import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// PAGE-TO-PAGE REDIRECT MAP
const redirects = {
  "/": "https://www.fierbout.com/",

  "/ecole-fierbout": "https://www.fierbout.com/",
  "/modalites-d-inscription": "https://www.fierbout.com/admission",
  "/reglement-interieur": "https://www.fierbout.com/",
  "/horraires-des-cours": "https://www.fierbout.com/",
  "/calendrier-scolaire": "https://www.fierbout.com/",
  "/petites-annonces": "https://www.fierbout.com/annonces",
  "/espace-d-eleve": "https://www.fierbout.com/",
  "/galerie-multimedia": "https://www.fierbout.com/multimedia",
  "/sports": "https://www.fierbout.com/",
  "/activites-pedagogiques": "https://www.fierbout.com/activites",
  "/offre-pedagogique": "https://www.fierbout.com/pedagogie",
};

// REDIRECT HANDLER
app.use((req, res) => {
  const path = req.path.replace(/\/$/, "");
  const target =
    redirects[path] || redirects[path + "/"] || "https://www.fierbout.com/";

  res.set("Cache-Control", "public, max-age=31536000, immutable");
  res.redirect(301, target);
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
