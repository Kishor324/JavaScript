// 🧠 What is an Array?
// An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2...).
// Arrays help you store multiple values in a single variable — numbers, strings, or even
// objects/functions.

️ //Creating & Accessing Arrays

//Indexing starts from 0

let fruits = ["apple", "banana", "mango"];

js
let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80; // Update index 2
28/

filter()
js
let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order

js
let newArr = arr.slice(1, 3); // Copy from index 1 to 2
arr.sort(); // Lexical sort by default

js
let prices = [100, 200, 300];
let taxed = prices.map(p => p * 1.18);
//Complete JS Course Syllabus

30/36
//Filters out elements based on a condition.

reduce()
//Reduces the array to a single value.

forEach()
//Performs an action for each element (but returns undefined).

find(), some(), every()

//✂️ Destructuring & Spread
js
let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);

js
let total = nums.reduce((acc, val) => acc + val, 0);

js
nums.forEach(n => console.log(n));

js
nums.find(n => n > 2); // First match
nums.some(n => n > 5); // At least one true
nums.every(n => n > 0); // All true






// Extract only the middle 3 element fomr this aeray
 let item = [ 1,2,3,4,5,6]
   let newarrray = item.slice(1,4);
    console.log(newarrray);

    // sort the array alphabatically and then reverse it;

    let names = [" sudip"," krinsa"," ram", " ganesh", "kapin"]

    names.sort().reverse();

    //use .map() to square each number

    let arr = [ 1,2,3,4];
    let newarr = arr.map(function(val){
         return val * val;

    })

     console.log(newarr);