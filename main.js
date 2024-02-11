let navbar = document.getElementById('navbar')
let w = window.innerWidth
window.addEventListener('scroll',function(){
   if (window.scrollY>= 100 ||w<992){
    navbar.classList.add('new-bg-color')
    navbar.style.transition = '1s'
   }else{
    navbar.classList.remove('new-bg-color')
    navbar.style.transition = '1s'
   }
   
})
//

//smooth scrol//
let links = document.querySelectorAll('nav a')
links.forEach(function(link){
link.addEventListener('click',function(e){
    let currentId=e.target.attributes.href.value
    

})
})

