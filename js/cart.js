/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var output = document.createElement('p');
output.setAttribute('id','parag');
table.appendChild(output);
var deleteAll = document.getElementById('delete');
deleteAll.addEventListener('submit', removeItemFromCart);
// var cart;
var cartItems;

function loadCart() {
   cartItems = JSON.parse(localStorage.getItem('cartItems'));
  console.log(cartItems[0].name);
  
  //cartArray = new Cart(cartItems.name , cartItems.quantity);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


for(var i=0; i<cartItems.length;i++){
  output.textContent= `You have ${cartItems[i].quantity} of ${cartItems[i].name}.`;
}

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();
  localStorage.clear();
  var clearParag = document.getElementById('parag');
  for(var i=0; i<cartItems.length;i++){
    clearParag.clear();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
