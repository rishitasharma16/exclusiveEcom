let showContent = document.querySelector(".hideDesc")
let hideContent = document.querySelector(".hideContent")
let navLink = document.querySelector('.nav_link')

hideContent.addEventListener("click",()=>{
    showContent.classList.toggle("showDesc");
    
    if(showContent.classList.contains('showDesc')){
        hideContent.innerHTML = 'Read Less'
    }else{
        hideContent.innerHTML = 'Read More'
    }
})




function handleMenu(p){
    p.classList.toggle('bx-x')

    if(p.classList.contains('bx-x')){
       navLink.style.height='100vh'
    }else{
        navLink.style.height="0"
    }
}


// menuBar.addEventListener("click",()=>{
//     if(navLink.style.display = "block"){
//         cancelBtn.style.display = "block"
//     }else {
//         cancelBtn.style.display = "none"
//     }
    
// })