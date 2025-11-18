(() => {
  const btnVert = document.querySelector(".bouton-tpe-vert");
  const btnRouge = document.querySelector(".bouton-tpe-rouge");

  const btnAnnuler = document.querySelector(".btn-annulation-transaction");
  const btnReussie = document.querySelector(".btn-reussite-transaction");
  const btnEchouee = document.querySelector(".btn-echec-transaction");

  const modal = document.querySelector(".modal");

  const ligne1 = document.querySelector(".ecran-ligne1");
  const ligne2 = document.querySelector(".ecran-ligne2");

  const pad = document.querySelector(".tpe-boutons");

  const texteInitial = document.querySelector(".ligne1");

  ligne1.textContent += "20€";

  const codeAttendu = "1234";

  let codeSaisi = "";

  function renitialiser() {
    ligne2.textContent = "";
    codeSaisi = "";
  }

  /* Listener TPE */

  pad.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const key = btn.textContent.trim();
    //if (ligne1 === "20€") {
    if (/^[0-9]$/.test(key) && codeSaisi.length < 4) {
      ligne2.textContent += "*";
      codeSaisi += key;
    }
    //}
    else if (key === "O") {
      if (codeSaisi === codeAttendu) {
        modal.hidden = false;
      } else {
        ligne1.textContent = "Code erroné";
        renitialiser();
      }
    } else if (key === "X") {
      ligne1.textContent = "Transaction annulée";
      renitialiser();
    }
  });

  /* Listeners du modal */

  /* --- Bouton réussite = simule une transaction écouchée et ferme le modal --- */
  btnReussie.addEventListener("click", () => {
    modal.hidden = true;
    ligne1.textContent = "Transaction réussie";
    renitialiser();
  });

  /* --- Bouton echec = simule une transaction écouchée et ferme le modal --- */
  btnEchouee.addEventListener("click", () => {
    modal.hidden = true;
    ligne1.textContent = "Transaction échouée";
    renitialiser();
  });

  /* --- Bouton ANNULER = ferme le modal --- */
  btnAnnuler.addEventListener("click", () => {
    modal.hidden = true;
  });
})();
