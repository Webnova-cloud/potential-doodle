// Stocker le panier dans localStorage
let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(produit) {
  panier.push(produit);
  localStorage.setItem("panier", JSON.stringify(panier));
  alert(produit + " ajouté au panier !");
}

function afficherPanier() {
  const ul = document.getElementById("panier-liste");
  if (!ul) return;
  ul.innerHTML = "";
  panier.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function viderPanier() {
  panier = [];
  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
}

window.onload = afficherPanier;