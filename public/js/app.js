// back to top button

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


// scroll effect
let options={
    threshold: 1.0
}

// create observer


const scroll = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("scroll-effect", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: .25,

})

scroll.forEach(img => {
  observer.observe(img)
})

