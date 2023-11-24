// document.addEventListener('DOMContentLoaded',()=>{
  
//     const currentUrl=window.location.href;
// const  navLink=document.querySelectorAll('.nav-link');

//     if(currentUrl){
// navLink.classList.add('nav-active');
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    let backToTopButton = document.querySelector(".top");

    window.addEventListener("scroll", function() {
        // Calculate the scroll position
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        // Set the display property of the button based on the scroll position
        if (scrollPosition > window.innerHeight* 7/8) {
            backToTopButton.classList.add('visible')
        } else {
            backToTopButton.classList.remove('visible')
        }
    });
});
