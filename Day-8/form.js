let name = document.querySelector("#name")

let form = document.querySelector("form");


form.addEventListener("sumbit", function(dets){

    dets.preventDefault();
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let ans = Regex.test("kishr@gmail.com")
   console.log(ans);
     
    //     console.log(validateEmail("kishor@gmail.com"));      // true
// console.log(validateEmail("kishor123@gmail.co"));    // true
// console.log(validateEmail("kishor@gmail"));          // false
// console.log(validateEmail("kishor@.com"));           // false
    //  if (name.value.legth <=3){

    //     document.querySelector("#hide").style.display ="initial"

    //  }
    //  else{
    //     document.querySelector(#hide).style.display = " none"
    //  }
})