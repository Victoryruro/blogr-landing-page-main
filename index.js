const menu = document.querySelector('#menucontainer');
const hamburger= document.querySelector('#hamburger');
let image1= true;
const accordion = document.getElementsByClassName('accordion');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    image1=!image1;
    hamburger.src = image1?'./images/icon-hamburger.svg' :'./images/icon-close.svg ';
    
 
});

const mapMenu = Object.entries(accordion).map(value =>{
    // console.log(value[1].childNodes.values()); 
    value[1].addEventListener('click', () =>{
        value[1].classList.toggle('active')    
        
    })
     
})


