// oop concept in js : yasto kam garxa if we make a obejct  use data purai code ma ja ja tesoko need xa yesay code realible banai dinca

// function Createpencil(name , price, color,company) {
//      this.name = name;
//      this.price = price;
//      this.color = color;
//      this.company= "kishor";
//      this.write = function (text) {

//         let h1 = document.createElement("h1");
//         h1.textContent =  text;
//         h1.style.color = color;
//         document.body.append(h1)
//      };
    
// }

//  let pencil1 = new Createpencil("rajasab",10,"black","rajasab");
//  let pencil2 = new Createpencil("Doms",10,"red","doms");


//Prototype: this is used for addtional data form out side of object

//  function Createpencil(name , price, color,company) {
//      this.name = name;
//      this.price = price;
//      this.color = color;
     
//      this.write = function (text) {

//         let h1 = document.createElement("h1");
//         h1.textContent =  text;
//         h1.style.color = color;
//         document.body.append(h1)
//      };
    
// }

// Createpencil.prototype.company = "kishor"
//  let pencil1 = new Createpencil("rajasab",10,"black","");
//  let pencil2 = new Createpencil("Doms",10,"red","");

// classes 
 class CreatePencil {
    constructor( name,company,price,color){

        this.name = name;
        this.company =company;
        this.price =price;
        this.color = color;

    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
       document.body.appendChild( h1)
    }
 }
   let p1 = new CreatePencil ("natraj"," natraj",10,"black")
   let p2 = new CreatePencil ("apsera","apsera",30,"blue")
 

   