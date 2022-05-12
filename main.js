// const parallax = document.getElementById("prlx");
// window.addEventListener("scroll", function () {
//     let offset = window.pageYOffset;
//     console.log('Offset: ' + offset);
//     // parallax.style.backgroundPositionY = offset * 0.7 + "px";
// })


// 2nd 

// const parallax = document.querySelectorAll(".parallax");
// window.addEventListener("scroll", function() {
//     let offset = window.pageYOffset;
//     parallax.forEach(function(prllx, i) {
//         console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
//         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
//     })
// })

// msgbox exit

// var exit = document.querySelector(".messenger");

// function exittog(){
//     exit.classList.toggle("exitto"); 
// }


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



