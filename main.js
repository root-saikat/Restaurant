

document.querySelector(".cross").addEventListener("click", function(){
    document.querySelector(".messenger").style.width = "0";
    document.querySelector(".messenger").style.border = "none";
} )

// msgbox

// var msg = document.querySelector(".messenger");

// function msgtoggle(){
//     msg.classList.toggle("chatmsg"); 
// }

document.querySelector(".chatbox").addEventListener("click", function(){
    document.querySelector(".messenger").style.display = "flex";
} )



// active 

document.querySelectorAll('.nav-link').forEach(link => {
    // console.log(link.href , window.location.href)
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })


// mobile menu 
let micon = document.querySelector('.phone-menu');
let mnav = document.querySelector('.mobile-menu');
let mxicon = document.querySelector('.x-mark');

micon.addEventListener('click', () =>{
    mnav.style.display = "flex";
});
mxicon.addEventListener('click', () =>{
    mnav.style.display = "none";
});

let am = document.querySelectorAll('.nav-link').forEach(element=>{
    element.onclick = function(){
      mnav.style.display = "none";
    }
});
