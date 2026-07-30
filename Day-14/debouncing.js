// let input = document.querySelector("input")


 function debounce(fnc ,dealy){
     let timer;
    return function(...arg){
        clearTimeout(timer);
        timer= setInterval(() => {
          fnc(...arg)  
        }, dealy);
       
    }}
input.addEventListener("input",
    debounce(function(dets){
        console.log(dets)
    },1000))


    //throttle
    //  interval par chale vayeo 

    let input = document.querySelector("input")


 function throttle(fnc ,dealy){
     let timer = 0;
    return function(...arg){
        let now = Date.now();
        if (now - timer >= dealy){
            timer = now;
            fnc(...arg);
        }
       
    }}
input.addEventListener("input",
    throttle(function(){
        console.log("haa bhai")
    },1000))
