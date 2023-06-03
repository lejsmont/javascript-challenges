import shoppingCart from "./shoppingItems.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    return arr.reduce((acc, el) => el.type === "savory" ? acc + el.price : acc, 0)

}

console.log(totalSavory(shoppingCart));

