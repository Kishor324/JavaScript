// some qn of using fuction concept

// write a BMI calculator

// What is BMI?

// BMI (Body Mass Index) is a simple measurement used to estimate whether a person's weight is appropriate for their height. It helps identify whether someone is underweight, at a healthy weight, overweight, or obese.

// BMI is a screening tool, n



// function calculateBMI( weight, height){


//      let bmi = weight / height* height;

//      if( weight>50){
//          console.log( " this is good")
//      }
//          else if ( 40 < weight ) { 
//          console.log(" its is a avegarge weight")


//       }
//        else if ( 30< weight) {
//          console.log( " its a under weight")
//        }
//         else { 
//              console.log(" need check up for servining ")
//         }


//     }

//      calculateBMI( 55 , 1.75);



     // Function to calculate BMI
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);

    console.log("BMI:", bmi.toFixed(2));

    if (bmi < 18.5) {
        console.log("Category: Underweight");
    } else if (bmi < 25) {
        console.log("Category: Normal weight");
    } else if (bmi < 30) {
        console.log("Category: Overweight");
    } else {
        console.log("Category: Obese");
    }
}

// Function call
calculateBMI(50, 1.75);