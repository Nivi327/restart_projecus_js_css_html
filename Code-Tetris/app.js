document.addEventListener('DOMContentLoaded', ()=>{
    const grid_div = document.querySelector('.grid')
    i = 200
    while( i > 0){
        const div = document.createElement('div');
        grid_div.appendChild(div)
        i--;
    }

    let div_list = document.querySelectorAll('.grid div'); // Node List
    let squares = Array.from(div_list); // Array.from is used to Convert a NodeList to the Array
    // NodeList is a collection of dom elements whereas Array is a collection.
    // We cannot use the methods like push, pop, shift, unshift on NodeList
    // To use the methods we have to convert NodeList to an Array using Array.from() method.
    // .forEach() method will be applicable to both NodeList and Array.
    // console.log(div_list);
    // console.log(squares);
    const score = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
})

