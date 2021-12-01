/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const storeLi = document.createElement("li")
const cartLi = document.createElement("li")
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
            name: "beetroot",
            price: 0.35,
            amount: 0
        },
        {
            id: 6,
            name: "avocado",
            price: 0.6,
            amount: 0
        },
        {
            id: 7,
            name: "bananas",
            price: 0.35,
            amount: 0
        },
        {
            id: 8,
            name: "bell-pepper",
            price: 0.30,
            amount: 0
        },
        {
            id: 9,
            name: "berry",
            price: 0.40,
            amount: 0
        },
        {
            id: 10,
            name: "blueberry",
            price: 0.5,
            amount: 0
        },
        {
            id: 1,
            name: "eggplant",
            price: 0.5,
            amount: 0
        }
    ],
}

// create store grocery

function createStoreGrocery(){

const storeUl = document.querySelector("header .item-list")

const storeLi = document.createElement("li")

const storeDiv = document.createElement("div")
storeDiv.setAttribute("class",".store--item-icon")

const storeImg = document.createElement("img")
storeImg.setAttribute("src","assets/icons/001-beetroot.svg")
  
const storeButton = document.createElement("button")
storeButton.textContent = "Add to cart"

storeUl.append(storeLi)
storeLi.append(storeDiv, storeImg, storeButton)
}
createStoreGrocery()

// create cart grocery

function createCartGrocery(){

const cartUl = document.querySelecton(".item-list cart--item-list")

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