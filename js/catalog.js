/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cartArray=[];
var counter = 0;
function cart(name,quantity){
  this.name = name;
  this.quantity=quantity ;
  

  cartArray.push(this);
  
}
// var cart = new products([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  
  //TODO: Add an <option> tag inside the form's select for each product
  
  var selectElement1 = document.getElementById('items');
  for (var i=0;i<items.length;i++) {
    var options = document.createElement('option');
    selectElement1.appendChild(options);
    options.textContent= items[i].split('.')[0];

  }
  
  

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
var addToCart = document.getElementById('addTo')
addToCart.addEventListener('click',handleSubmit);
function handleSubmit(event) {

  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  //cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var suss = document.getElementById('cartContents');
  var print = document.createElement('p');
  suss.appendChild(print);
  var selectedItem = document.getElementById('items');
  var quantityItem = document.getElementById('quantity');
   print.textContent= `${quantityItem.value} quantities of ${selectedItem.value}`;
   var x =new cart(selectedItem.value,quantityItem.value);
   counter++;
   console.log(counter);
   var setLocalStorage = JSON.stringify(cartArray);
   localStorage.setItem('cartItems', setLocalStorage);
  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
var counterItems = document.getElementById('itemCount');
counterItems.textContent=`You have ${counter} items`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process

populateForm();
