/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/



const totalSum = document.querySelector(".total-number")



const state = {
    groceries: [
        {
            id: 1,
            name: "beetroot",
            price: 0.35,
            amount: 0
        },
        {
            id: 2,
            name: "carrot",
            price: 0.30,
            amount: 0
        },
        {
            id: 3,
            name: "apple",
            price: 0.40,
            amount: 0
        },
        {
            id: 4,
            name: "appricot",
            price: 0.25,
            amount:0
        },
        {
            id: 5,
            name: "avocado",
            price: 0.6,
            amount: 0
        },
        {
            id: 6,
            name: "bananas",
            price: 0.35,
            amount: 0
        },
        {
            id: 7,
            name: "bell-pepper",
            price: 0.30,
            amount: 0
        },
        {
            id: 8,
            name: "berry",
            price: 0.40,
            amount: 0
        },
        {
            id: 9,
            name: "blueberry",
            price: 0.5,
            amount: 0
        },
        {
            id: 10,
            name: "eggplant",
            price: 0.5,
            amount: 0
        }
    ],
}

// function addToCart(grocery){
//     state.groceries.filter(function (addGroceriesToCart){
//      return addGroceriesToCart.name === grocery.name
//     })
//   }

// create store grocery

function createStoreGrocery(){

const storeUl = document.querySelector("header .item-list")

for (const grocery of state.groceries){

const storeLi = document.createElement("li")

const storeDiv = document.createElement("div")
storeDiv.setAttribute("class",".store--item-icon")

const storeImg = document.createElement("img")
storeImg.setAttribute(`src`,`assets/icons/${grocery.id<10?'00':'0'}${grocery.id}-${grocery.name}.svg`)
  
const storeButton = document.createElement("button")
storeButton.textContent = "Add to cart"

storeButton.addEventListener("click", function(){
    addToCart(grocery)
    render()
})

storeDiv.append(storeImg)
storeUl.append(storeLi)
storeLi.append(storeDiv, storeButton)
}
}
createStoreGrocery()


// create cart grocery

function createCartGrocery(){

const cartUl = document.querySelecton("#cart .item-list")

const cartLi = document.createElement("li")

const cartImg = document.createElement("img")
cartImg.setAttribute("class","cart--item-icon")

const cartGroceryName = document.createElement("p")

const removeButton = document.createElement("button")
removeButton.setAttribute("class","quantity-btn remove-btn center")
removeButton.textContent = "-"

const span = document.createElement("span")
span.setAttribute("class","quantity-text center")
span.textContent = "1"

const addButton = document.createElement("button")
addButton.setAttribute("class","quantity-btn add-btn center")
addButton.textContent = "+"

cartUl.append(cartLi)
cartLi.append(cartImg, cartGroceryName, removeButton, span, addButton)
}
createCartGrocery()
// const groceries = state.groceries

// for(const grocery of groceries){    
//     
//     
// }

function render(){

}
render()