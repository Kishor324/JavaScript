// Create an object for a student with name , age, and  isEnrolled

let obj = {
    name: " kishor",
    age:  34,
    isEnrolled: "true"
};

// Can an object key be a number or boolean? Try this

const obj ={
true :"yes",
42 :" answer"
};
console.log(obj[true]);

// Acess the value of first name form the object:
const user = {
     "first_name":"kishor"
    }

     user["first_name"]


     // Given a dynamic key let key = "age", how will you ascess user[key]?

  let key = "age";
  const user = {
    age: 25,
  };
 

// form the object below print the latitude;
 const location = {
     city: " bhopal",
     coordinates: {
          
         lat: 23.45 ,
          lng :567.4
     },
 };

 location.coordinates.lng;


 // use for in to log all keys in this object;

 const course = {
    title : " javascript",
    duration: " 4 weeks",

 };

 for (let key in course) {
     console.log(key);
 }