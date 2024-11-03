
// fonction pour ajouter le produit choiser dans la page cart.html 



function ajouterAuPanier() {
    // Récupérer les informations du produit
    const productName = document.getElementById("product-name").textContent;
    const productPrice = document.getElementById("product-price").textContent.replace("$", "");
    const productImage = document.getElementById("product-img").src;
    const quantity = document.querySelector("input[type='number']").value;

    // Récupérer le panier existant ou créer un nouveau
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Vérifier si le produit existe déjà dans le panier
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // Mettre à jour la quantité si le produit existe
        cart[existingProductIndex].quantity = parseInt(cart[existingProductIndex].quantity) + parseInt(quantity);
    } else {
        // Ajouter le nouveau produit
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: parseInt(quantity)
        });
    }

    // Sauvegarder le panier mis à jour
    localStorage.setItem("cart", JSON.stringify(cart));
}

// fonction pour ajouter plus d'un produit en page du panier

document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les produits du localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    // Afficher chaque produit
    cart.forEach(product => {
        const subtotal = product.price * product.quantity;
        totalPrice += subtotal;

        const productHTML = `
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <p>${product.name}</p>
                            <small>price: $${product.price}</small><br>
                            <a href="#" onclick="removeFromCart('${product.name}')">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="${product.quantity}" min="1" onchange="updateQuantity('${product.name}', this.value)"></td>
                <td>$${subtotal.toFixed(2)}</td>
            </tr>
        `;
        cartContainer.innerHTML += productHTML;
    });

    // Mettre à jour le total
    document.querySelector(".total-price table td:last-child").textContent = `$${totalPrice.toFixed(2)}`;
});

// Fonction pour supprimer un produit
function removeFromCart(productName) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            
            // Filtrer le produit à supprimer
            cart = cart.filter(item => item.name !== productName);
            
            // Recalculer le total du panier
            let totalPrice = 0;
            let cartCount = 0;
            
            cart.forEach(item => {
                totalPrice += item.price * item.quantity;
                cartCount += parseInt(item.quantity);
            });
            
            // Mettre à jour le localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("totalPrice", totalPrice);
            localStorage.setItem("cartCount", cartCount);
            
            // Mettre à jour l'affichage dans la barre de navigation
            const navTotalPrice = document.querySelector("nav .menu-bar li");
            const cartIcon = document.querySelector("nav .fa-shopping-cart");
            
            navTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
            cartIcon.innerText = `  (${cartCount})`;
            
            // Recharger la page pour mettre à jour l'affichage du panier
            location.reload();
 }


// Fonction pour mettre à jour la quantité
function updateQuantity(productName, newQuantity) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const product = cart.find(item => item.name === productName);
            
            if (product) {
                // Mettre à jour la quantité du produit
                product.quantity = parseInt(newQuantity);
                
                // Recalculer le total du panier
                let totalPrice = 0;
                let cartCount = 0;
                
                cart.forEach(item => {
                    totalPrice += item.price * item.quantity;
                    cartCount += parseInt(item.quantity);
                });
                
                // Mettre à jour le localStorage
                localStorage.setItem("cart", JSON.stringify(cart));
                localStorage.setItem("totalPrice", totalPrice);
                localStorage.setItem("cartCount", cartCount);
                
                // Mettre à jour l'affichage dans la barre de navigation
                const navTotalPrice = document.querySelector("nav .menu-bar li");
                const cartIcon = document.querySelector("nav .fa-shopping-cart");
                
                navTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
                cartIcon.innerText = `  (${cartCount})`;
                
                // Recharger la page pour mettre à jour l'affichage du panier
                location.reload();
            }
}

// Mettre à jour le total
document.querySelector(".total-price table td:last-child").textContent = `$${totalPrice.toFixed(2)}`;
