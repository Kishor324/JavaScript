//loops 
//   //for 
//   for(let i=1; i<=100; i++) {
//      console.log(i);
//   }
 //while
//   let i= 1;
//    while( i<32){
//     //code 
//      console.log(i)
//       i++; 
//     }
   
    //do
    //   let i =12;
    //    do {
    //      console.log(i)
    //      i++;
    //    }
    //     while(i<20)


    // break

    // for (let i = 0; i < 200; i++) {
    //     console.log(i)
    //     if (i===32) {
    //         break
    //    }
        
    // }

    //  == (Loose Equality)This operator checks for value equality only, ignoring the data type. JavaScript converts both values to a common type before comparing them.5 == "5" is true (The string "5" is converted to the number 5).1 == true is true (The boolean true is converted to the number 1).0 == "" is true (Both convert to a falsy numeric state).


    // === (Strict Equality)This operator checks for both value and data type equality. If the types are different, the result is immediately false.5 === "5" is false (One is a number, the other is a string).1 === true is false (Different types).0 === "" is false (Different types).

    continue

    for (let i = 0; i <35; i++){
         if (i==32){
            continue;
         }
         console.log(i)
    }