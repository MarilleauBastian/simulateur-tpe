(() => {
  const btnVert = document.querySelector(".bouton-tpe-vert");
  const btnRouge = document.querySelector(".bouton-tpe-rouge");
  const btnJaune = document.querySelector(".bouton-tpe-jaune");

  const btnAnnuler = document.querySelector(".btn-annulation-transaction");
  const btnReussie = document.querySelector(".btn-reussite-transaction");
  const btnEchouee = document.querySelector(".btn-echec-transaction");

  const modal = document.querySelector(".modal");

  const ligne1 = document.querySelector(".ecran-ligne1");
  const ligne2 = document.querySelector(".ecran-ligne2");

  const pad = document.querySelector(".tpe-boutons");

  const texteInitial = "20€";

  ligne1.textContent = texteInitial;

  const codeAttendu = "1234";

  let codeSaisi = "";

  let revertTimer = null;

  function reinitialiserAvecTimer() {
    ligne2.textContent = "";
    codeSaisi = "";
    revertTimer = setTimeout(() => {
      ligne1.textContent = texteInitial;
    }, 3000);
  }

  /* Listener TPE */

  pad.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const key = btn.textContent.trim();

    if (ligne1.textContent === texteInitial) {
      if (/^[0-9]$/.test(key) && codeSaisi.length < 4) {
        ligne2.textContent += "*";
        codeSaisi += key;
      } else if (key === "O") {
        if (codeSaisi === codeAttendu) {
          modal.hidden = false;
        } else {
          ligne1.textContent = "Code erroné";
          reinitialiserAvecTimer();
        }
      } else if (key === "X") {
        ligne1.textContent = "Transaction annulée";
        reinitialiserAvecTimer();
      } else if (key === "<") {
        ligne2.textContent = ligne2.textContent.slice(0, -1);
        codeSaisi = codeSaisi.slice(0, -1);
      }
    }
  });

  /* Listeners du modal */

  /* --- Bouton réussite = simule une transaction écouchée et ferme le modal --- */
  btnReussie.addEventListener("click", () => {
    modal.hidden = true;
    ligne1.textContent = "Transaction réussie";
    reinitialiserAvecTimer();
  });

  /* --- Bouton echec = simule une transaction écouchée et ferme le modal --- */
  btnEchouee.addEventListener("click", () => {
    modal.hidden = true;
    ligne1.textContent = "Transaction échouée";
    reinitialiserAvecTimer();
  });

  /* --- Bouton ANNULER = ferme le modal --- */
  btnAnnuler.addEventListener("click", () => {
    modal.hidden = true;
  });
})();
