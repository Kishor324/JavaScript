// function is a important topic in js which helps us 
// 
// we can easily solve multiple task easilyIn JavaScript, a function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you write it once in a function and call it whenever you need it.

// Function Syntax
// function functionName(parameters) {
//     // Code to execute
//     return value; // Optional
// // }


// create a reuseable discount calculator hof 

function creatediscount(discountprice) {
     return function(price){

         let discount = ( price* discountprice) /100
         return price - discount
        };

}
// reuseabl discount price system
 let tenPercentDiscount= creatediscount(10);
let twentyPercentDiscount = creatediscount(20);


// Use the functions
console.log(tenPercentDiscount(1000));   // 900
console.log(twentyPercentDiscount(10000)); // 800