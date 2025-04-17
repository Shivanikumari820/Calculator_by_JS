
let store='' ; //1

let cal=(value)=>{ //1 //2
    let show=document.querySelector('#display')
    store=store+value ; //  
    show.innerHTML=store;
}

let result=()=>{

    let show=document.querySelector("#display")

    store=eval(store)   //"1+2"=3 number

    show.innerhtml=store

}

   let del=()=>{
    let show=document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store
}

    const All = () => {
      store = '';
      document.querySelector("#display").innerHTML = '';
    };


    
//for extra button , scientific calculation---.>>>
    const toggleSciMenu = () => {
      let row1 = document.getElementById('sci-tools');
      let row2 = document.getElementById('sci-tools-2');
      let show = row1.style.display === 'none';
      row1.style.display = show ? 'table-row' : 'none';
      row2.style.display = show ? 'table-row' : 'none';
    };

    
    let sqrt = () => {
  let show = document.querySelector("#display");
  let num = Number(store);     //convert string into number jo ki store h string ki form m
  store = Math.sqrt(num); 
    show.innerHTML = store;  
}

let square = () => {
  let show = document.querySelector("#display");
  let num = Number(store);  
  store = num ** 2;  // store = Math.pow(num, 2);
  
  show.innerHTML = store;  
}

let cube = () => {
  let show = document.querySelector("#display");
  let num = Number(store);  
  store = num ** 3;  // Cube the number (num raised to the power of 3)
  
  show.innerHTML = store;  
}

let reciprocal = () => {
  let show = document.querySelector("#display");
  if (store == 0) {
    show.innerHTML = "Error";  // Show error if division by zero
    store = '';  // Reset store
  } else {
   let num = Number(store);
    store = 1 / num;
    show.innerHTML = store;
}}
