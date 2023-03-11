const emailToogleMenu=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const burgerToogleMenu=document.querySelector('.menu')
const mobileMenu=document.querySelector('.mobile-menu')
const cartToogleMenu=document.querySelector('.navbar-shopping-cart')
const cardsContainer=document.querySelector('.cards-container')
const shoppingCartMenu=document.querySelector('#shoppingCartContainer')
const productDetailContainer=document.querySelector('#product-detail')
const productDetailCloser=document.querySelector('.product-detail-close')

emailToogleMenu.addEventListener('click', toggleDesktopMenu)
burgerToogleMenu.addEventListener('click', toggleMobileMenu)
cartToogleMenu.addEventListener('click', toggleCartMenu)
productDetailCloser.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    productDetailContainer.classList.add("inactive")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    productDetailContainer.classList.add("inactive")
}
function toggleCartMenu(){
    shoppingCartMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    productDetailContainer.classList.add("inactive")
}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    shoppingCartMenu.classList.add("inactive")    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}

let productList=[]
productList.push({
    name: "Bike",
    price: "120",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
})
productList.push({
    name: "Trycicle",
    price: "100",
    image: "https://media.istockphoto.com/id/638170998/es/foto/triciclo-rojo.jpg?s=612x612&w=0&k=20&c=XpNh6SSTUcG58Hv3M4A8u6h6dBNYvE9N3mO-8dItRTw=" ,
})
productList.push({
    name: "Motorcycle",
    price: "220",
    image: "https://media.istockphoto.com/id/996760770/es/foto/moto-negro-moderno.jpg?s=612x612&w=0&k=20&c=tg5memZig9LOqAXNSahGf56wye2zy02kyWf3hLd6qYo=" ,
})
productList.push({
    name: "Car",
    price: "599",
    image: "https://media.istockphoto.com/id/1307086567/es/foto/coche-suv-moderno-gen%C3%A9rico-en-garaje-de-hormig%C3%B3n.jpg?s=612x612&w=0&k=20&c=ki5IiNuzrViW_ImDLpapKTyUBHLYaD89feYO8797KtY=" ,
})
productList.push({
    name: "Truck",
    price: "699",
    image: "https://media.istockphoto.com/id/485787194/es/foto/plata-pickup-truck-gen%C3%A9rico.jpg?s=612x612&w=0&k=20&c=ASvUcVzz3Y7Kuh0ERDf503NfsTjBxePpUslgUnmo5pA=" ,
})
productList.push({
    name: "Transformer",
    price: "999",
    image: "https://media.istockphoto.com/id/514770269/es/foto/optimus-prime-western-star-transformadores-de-cami%C3%B3n.jpg?s=612x612&w=0&k=20&c=6tESmequt4C-GPtC2hxT7T0R_XOrkN6xA2a1JgvXEQg=" ,
})

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts(arr){
for(product of arr){
    const productCard=document.createElement('div')
    productCard.classList.add('product-card')

    const productImg=document.createElement('img')
    productImg.setAttribute('src',product.image)
    productImg.addEventListener('click',openProductDetailAside)
    
    const productInfo=document.createElement('div')
    productInfo.classList.add('product-info')

    
    const productPrice=document.createElement('p')
    productPrice.innerText='$'+ product.price
    const productName=document.createElement('p')
    productName.innerText=product.name
    
    const productInfoDiv=document.createElement('div')
    productInfoDiv.append(productPrice,productName)
    const productInfoFigure=document.createElement('figure')
    const productImgCart=document.createElement('img')
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)
    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)
    cardsContainer.appendChild(productCard)
}
}

renderProducts(productList)