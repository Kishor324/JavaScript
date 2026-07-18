const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener( "submit", function(dets){
    dets.preventDefault();
    
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   let emaillans = emailRegex.test( email.value)
   let passwordans= passwordRegex.test( password.value)

   if(!emaillans){
     document.querySelector("#emailError").textContent = " Email is incorrect";
   }

   
   if(!passwordans){
     document.querySelector("#passwordError").textContent = " password is incorrect";
   }

    if (emailAns && passwordAns) {
        alert("Login Successful!");
    }

})

