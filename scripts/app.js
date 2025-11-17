(() => {
  const btnVert = document.querySelector(".bouton-tpe-vert");
  const btnRouge = document.querySelector(".bouton-tpe-rouge");

  const btnAnnuler = document.querySelector(".btn-annuler");
  const btnReussie = document.querySelector(".btn-reussie");
  const btnEchouee = document.querySelector(".btn-echouee");

  const modal = document.querySelector(".modal");

  const ligne1 = document.querySelector(".ecran-ligne1");

  /* --- Bouton VERT = ouvrir la sélection de type de transaction --- */
  btnVert.addEventListener("click", () => {
    modal.hidden = false;
  });

  /* --- Bouton ROUGE = transaction abandonnée --- */
  btnRouge.addEventListener("click", () => {
    ligne1.textContent = "Transaction annulée";
  });

  /* bouton transaction*/
  btnReussie.addEventListener("click", () => {
    ligne1.textContent = "Transaction réussie";
  });

  btnEchouee.addEventListener("click", () => {
    ligne1.textContent = "Transaction échouée";
  });

  /* --- Bouton ANNULER = fermer la sélection de type de transaction --- */
  btnAnnuler.addEventListener("click", () => {
    modal.hidden = true;
  });

  btnReussie.addEventListener("click", () => {
    modal.hidden = true;
  });

  btnEchouee.addEventListener("click", () => {
    modal.hidden = true;
  });
})();
