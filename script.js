const colorButtons = document.querySelectorAll(".color-btn");
const shoeImage = document.getElementById("shoeImg");
const addToCartBtn = document.querySelector(".add-to-cart");
const shoeTitle = document.querySelector(".shoe-title");
const currentPrice = document.querySelector(".current-price");

colorButtons.forEach(button => {
    button.addEventListener("click", function(){

        //remove active from all buttons

        colorButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const newImageUrl = this.getAttribute("data-img");

        shoeImage.classList.remove('animate');
        shoeImage.src=newImageUrl;
        void shoeImage.offsetWidth;
        shoeImage.classList.add("animate")

        const color = this.getAttribute('data-color');
         if(color === 'red') shoeTitle.style.color = '#de1717ff';
        else if(color === 'blue') shoeTitle.style.color = '#0e8af7ff';
        else if(color === 'black') shoeTitle.style.color = '#2d3748';
        else if(color === 'white') shoeTitle.style.color = '#787878ff';

        const price = this.getAttribute('data-color');
        if(color=== "red")currentPrice.style.color ="#f11a1aff";
        else if(color === "blue")currentPrice.style.color= '#1c87e5ff';
         else if(color === 'black') currentPrice.style.color = '#2d3748';
        else if(color === 'white') currentPrice.style.color = '#787878ff';
    });
});

addToCartBtn.addEventListener("click", function(){
    this.textContent = "Added! ✓";
    this.style.background = "linear-gradient(135deg,#48bb78 0%,#38a169 100%)";

    setTimeout(() => {
        this.textContent = "Add to Cart";
        this.style.background ='linear-gradient(135deg,#667eea 0%,#764ba2 100%)'
    }, 2000);
});