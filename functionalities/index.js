const changeColor = ["green", "blue", "#3752FD", "#63f0f4", "#4cb7ba", "#4ca8ba"];
let index = 0;

document.getElementById("theme-btn").addEventListener("click", function () {
    document.getElementById("body").style.background = changeColor[index];
    index = (index + 1) % changeColor.length
});



function addCartItems(butttonId, cartId) {
    const button = document.getElementById(butttonId);
    button.addEventListener("click", function () {
        const times = new Date().toLocaleTimeString();
        const cart1 = document.getElementById(cartId);
        const newElement = document.createElement("cart-cointainer");
        newElement.textContent = `You have Complete The Task ${cart1.textContent} at : ${times}`;
        document.getElementById("cart-cointainer").appendChild(newElement);
        document.getElementById(butttonId).disabled = true;
        alert("Bord Update Successfully");
    })
}


addCartItems("item-1", "cart-1");
addCartItems("item-2", "cart-2");
addCartItems("item-3", "cart-3");
addCartItems("item-4", "cart-4");
addCartItems("item-5", "cart-5");
addCartItems("item-6", "cart-6");





document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("cart-cointainer").innerHTML = "";
})



