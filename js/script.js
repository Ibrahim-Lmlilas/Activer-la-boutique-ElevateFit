// JS for Single product detail


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

        
 