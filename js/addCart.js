    //   /*------------- Add to cart & price total --------------------*/

    document.addEventListener("DOMContentLoaded", function() {
        const addToCartButton = document.querySelector(".btn");
        const quantityInput = document.getElementById("product-quantity");
        const productPriceElement = document.getElementById("product-price");
        const productNameElement = document.getElementById("product-name");
        const productSizeSelect = document.getElementById("product-size");
        const navTotalPrice = document.querySelector("nav .menu-bar li");
    
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
        function updateCartDisplay(cartItems) {
            const totalPrice = cartItems.reduce((acc, item) => acc + item.total, 0);
            
            // Save the total price to local storage so it can be accessed on other pages
            localStorage.setItem("cartTotalPrice", JSON.stringify(totalPrice));
    
            navTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
    
            const cartIcon = document.querySelector("nav .fa-shopping-cart");
            const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
            cartIcon.parentElement.innerHTML = `<i class="fas fa-shopping-cart"></i> (${totalQuantity})`;
        }
    
        updateCartDisplay(cartItems);
    
        quantityInput.addEventListener("input", function() {
            if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }
        });
    
        addToCartButton.addEventListener("click", function(event) {
            event.preventDefault();
            
            let quantity = parseInt(quantityInput.value);
            if (isNaN(quantity) || quantity < 1) {
                quantityInput.value = 1;
                quantity = 1;
            }
    
            const productName = productNameElement.textContent;
            const productPrice = parseFloat(productPriceElement.textContent.replace("$", ""));
            const selectedSize = productSizeSelect.value;
    
            if (selectedSize === "Select Size") {
                alert("Please select a size!");
                return;
            }
    
            const product = {
                name: productName,
                size: selectedSize,
                quantity: quantity,
                price: productPrice,
                total: quantity * productPrice
            };
    
            cartItems.push(product);
            
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
            updateCartDisplay(cartItems);
        });
    });
    



// -----------------------------ADD ITEMS-----------------------------


document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.querySelector(".btn"); // Select the "Add To Cart" button
    addToCartButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Get product details
        const name = document.getElementById("product-name").textContent;
        const price = parseFloat(document.getElementById("product-price").textContent.replace('$', ''));
        const quantity = parseInt(document.getElementById("product-quantity").value);
        const image = document.getElementById("product-img").src;

        // Create a product object with price included
        const product = { name, price, quantity, image };

        // Retrieve existing cart or initialize an empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product already exists in the cart
        const existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            // Update quantity and price for existing product
            existingProduct.quantity += quantity;
            existingProduct.price = price; // Update price if needed
        } else {
            // Add new product if it doesn’t exist in the cart
            cart.push(product);
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});


