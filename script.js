var product_list = []
var cart_list = []

class Product{
    constructor(){
        this.title = ""
        this.description =""
        this.image = ""
        this.price = 0
    }

    addProduct(list){
        
        list.push(this)
        displayProducts()
    }
}

window.onload = function(){   

    let product = new Product()
    product.title = "Jean"
    product.description = "Jean"
    product.image = "img1.png"
    product.price = 150
    product.addProduct(product_list)

    let product2 = new Product()
    product2.title = "Jean"
    product2.description = "Jean"
    product2.image = "img2.png"
    product2.price = 170
    product2.addProduct(product_list)

    let product3 = new Product()
    product3.title = "Jean"
    product3.description = "Jean"
    product3.image = "img3.png"
    product3.price = 160
    product3.addProduct(product_list)

    let product4 = new Product()
    product4.title = "jacket"
    product4.description = "jacket"
    product4.image = "img4.png"
    product4.price = 240
    product4.addProduct(product_list)

    displayProducts()
    document.getElementById("cartDisplay").style.visibility = "hidden"
    document.getElementById("addProductDisplay").style.visibility = "hidden"

    document.getElementById("addProduct").onclick = function(){
 
        document.getElementById("addProductDisplay").style.visibility = "visible";
       
    }

    document.getElementById("showCart").onclick = function(){
        document.getElementById("totalPrice").innerHTML = "Total : "
        if(document.getElementById("cartDisplay").style.visibility === "hidden"){
            document.getElementById("cartDisplay").style.visibility = "visible";
            displayCart()
            let totalPrice = 0;
            for(let i = 0; i < cart_list.length; i++){
                totalPrice+=parseInt(cart_list[i].price);
            }
            document.getElementById("totalPrice").innerHTML += ""+totalPrice+""
            
        }
        else{
            document.getElementById("cartDisplay").style.visibility = "hidden";

        }
        
    }

    document.getElementById("addBtn").onclick = function(){
        let p = new Product()
        p.addProduct(product_list)
        p.title = document.getElementById("titleTxt").value;
        p.description = document.getElementById("desTxt").value;
        p.image = document.getElementById("imgTxt").value;
        p.price = document.getElementById("priceTxt").value;
        displayProducts();
        document.getElementById("addProductDisplay").style.visibility = "hidden";
    }
}

function displayProducts(){
    document.getElementById("productContainer").innerHTML = ""
    for(let i = 0; i < product_list.length; i++){
        document.getElementById("productContainer").innerHTML +=
        '<article>'+
        '<h3>'+product_list[i].title+'</h3>'+
        '<p>'+product_list[i].description+'</p>'+
        '<img src="'+product_list[i].image+'" style="width:75px; height:150px;">'+
        '<p>'+product_list[i].price+'</p>'+
        '<button onclick="addToCartFunc('+i+')">Add to Cart</button>'+
        '</article>'
    }
}

function displayCart(){
    document.getElementById("cartContainer").innerHTML = ""
    for(let i = 0; i < cart_list.length; i++){
        document.getElementById("cartContainer").innerHTML +=
        '<article class="cart">'+
        '<h3>'+cart_list[i].title+'</h3>'+
        '<p>'+cart_list[i].description+'</p>'+
        '<img src="'+cart_list[i].image+'" style="width:75px; height:150px;">'+
        '<p>'+cart_list[i].price+'</p>'+
        '<button onclick="removeFunc('+i+')">Remove</button>'+
        '</article>'
    }
}

function removeFunc(index){
    cart_list.splice(index,1)
    displayCart()
    document.getElementById("totalPrice").innerHTML = "Total : "
    let totalPrice = 0;
    for(let i = 0; i < cart_list.length; i++){
        totalPrice+=parseInt(cart_list[i].price);
    }
    document.getElementById("totalPrice").innerHTML += ""+totalPrice+""
            
}

function addToCartFunc(index){
    cart_list.push(product_list[index])
    console.log(cart_list.length)
}

function buyButton(){
    if(cart_list.length > 0){
        document.getElementById("cartDisplay").style.visibility = "hidden"
        document.getElementById("confirmDisplay").style.visibility = "visible"        
    }
}

function okButton(){
    document.getElementById("confirmDisplay").style.visibility = "hidden"
    cart_list = []
}

function cancelButton(){
    document.getElementById("confirmDisplay").style.visibility = "hidden"
}
