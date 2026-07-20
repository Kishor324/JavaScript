function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    
}
function getSystemTheme(){

    return window.matchMedia("(prefers-color-scheme:dark)").matches
     ? "dark"
     : "light";
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());
    
}

// set initial theme


setInitialTheme();

 // listien to the system theme color only if no theme is stored

 window.matchMedia("(prefers-color-scheme:dark)")
 .addEventListener("change",()=>{
     if (!localStorage.getItem("theme")){

        applyTheme(getSystemTheme());
     }
 });

 // theme toggle button


  document.querySelector("button").addEventListener("click",() =>{

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
     : "light";

     const  newTheme = currentTheme === "dark" ? "light":"dark";
      applyTheme(newTheme);
      localStorage.setItem("theme, newTheme");
  })
