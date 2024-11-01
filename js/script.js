
/*----------------------JS for Single product detail-------------------------*/ 


var ProductImg = document.getElementById("product-img");//larger image
var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

SmallImg[0].onclick = function()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
{
    ProductImg.src = SmallImg[0].src;   
}

SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].src;   
}

SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].src;   
}

SmallImg[3].onclick = function()
{
    ProductImg.src = SmallImg[3].src;   
}




/*--------------------- afficher les details de chaque produit  ---------------------------*/
function goToProduct(product) {
localStorage.setItem('selectedProduct', JSON.stringify(product));
 window.location.href = 'product-detail.html';
}


document.addEventListener('DOMContentLoaded', () => {
const product = JSON.parse(localStorage.getItem('selectedProduct'));
if (product) {
    document.getElementById('product-cat').innerText = product.cat;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-img').src = product.img;
    document.getElementById('product-price').innerText = product.price;y
}



});

/*-----------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
const product = JSON.parse(localStorage.getItem('selectedProduct'));
if (product) {
document.getElementById('product-cat').innerText = product.cat;
document.getElementById('product-name').innerText = product.name;
document.getElementById('product-img').src = product.img;
document.getElementById('product-price').innerText = product.price;

// Check if small images are available and update them
const smallImagesContainer = document.querySelector('.small-img-row');
if (product.smallImgs && smallImagesContainer) {
    // Clear any existing small images
    smallImagesContainer.innerHTML = '';

    // Loop through small images array and create elements
    product.smallImgs.forEach((src, index) => {
        const smallImgCol = document.createElement('div');
        smallImgCol.classList.add('small-img-col');

        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.width = 100;
        imgElement.classList.add('small-img');

        // Set the main image when a small image is clicked
        imgElement.addEventListener('click', () => {
            document.getElementById('product-img').src = src;
        });

        smallImgCol.appendChild(imgElement);
        smallImagesContainer.appendChild(smallImgCol);
    });
}
}
});

/*-----------------------------------------------------------------------------*/



