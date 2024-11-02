/*-----------------ajouter le nombre de pieces et le prix sur nav------------------*/

document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments HTML
    const addToCartButton = document.querySelector(".btn"); 
    const quantityInput = document.querySelector("input[type='number']"); // Champ de quantité
    const productPriceElement = document.getElementById("product-price"); // Prix unitaire du produit
    const navTotalPrice = document.querySelector("nav .menu-bar li"); // Prix total dans la barre de navigation
    const cartIcon = document.querySelector("nav .fa-shopping-cart"); // Icône du panier

    // Charger les données du localStorage
    let totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0 ;

    // Afficher les données chargées dans la barre de navigation
    navTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
    cartIcon.innerText = "";
    cartIcon.innerText = `  (${cartCount})`;

    // Écouteur d'événement pour le clic sur le bouton "Add To Cart"
    addToCartButton.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        
        // Récupérer la quantité et le prix unitaire
        const quantity = parseInt(quantityInput.value);
        const productPrice = parseFloat(productPriceElement.textContent.replace("$", ""));
        
        // Calculer le total pour cet ajout
        const totalProductPrice = quantity * productPrice;
        
        // Mettre a jour le total et le nombre d'articles dans le panier
        totalPrice += totalProductPrice;
        cartCount += quantity;

        // Enregistrer les donnees dans le localStorage
        localStorage.setItem("totalPrice", totalPrice);
        localStorage.setItem("cartCount", cartCount);

        // Afficher le total dans la barre de navigation
        navTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;   
        
        // Afficher le nombre d'articles dans le panier (a cote de l'icone du panier)
        cartIcon.innerText = "";
        cartIcon.innerText= `  (${cartCount})`;
    });
});





   