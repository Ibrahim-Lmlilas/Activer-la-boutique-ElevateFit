
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les valeurs du localStorage
    let totalPrice = localStorage.getItem("totalPrice") || "0.00";
    let cartCount = localStorage.getItem("cartCount") || "0";

    // Mettre à jour les éléments dans la page de paiement
    document.getElementById("checkout-quantity").textContent = cartCount;
    document.getElementById("checkout-total-price").textContent = "$" + parseFloat(totalPrice).toFixed(2);
   

});

document.querySelector('.order-submit-btn').addEventListener('click', function() {
    alert('Your order has been placed successfully !');
});
