//promises in js /:  yasto  function jas lay resolve and reject grxa while excutating the code

// eg ::
 let pm = new Promise( function (resolve , reject) {
    setInterval(() => {
        let num = Math.floor(Math.random()*10);
        if (num > 5) { 
            resolve(" this is resolved "+ num ) 
        }
         else reject("this is reject"+ num);
    }, 2000);
    
 });

 pm.then(function (val){
     console.log(val)
 })
 
  pm.catch(function (val){
     console.log(val)
 })