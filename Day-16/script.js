//fundamental of java script;
//array and objests
//function return
//asynce js coding

//foreach,map filter find indexof

// let array = ["harry","kishor","namesh"]
// array.forEach(element => {
//     console.log(array[1])
// });

//map

var arr = [1,2,3,4,5];

 var newarr= arr.map(function(val){
      
     return val*4;
     //  return 13;
 //console.log(`$(12)` + arr)
})

console.log(newarr);

// filter

  var ans =arr.filter(function(val){
    if (val >3 ){ return true;}

    else return false;
 });

  console.log(ans)