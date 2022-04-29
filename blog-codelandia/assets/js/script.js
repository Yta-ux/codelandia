function animationScroll() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1500,
        reset: false
    });

    ScrollReveal().reveal('.new', { delay: 150 })
    ScrollReveal().reveal('.date', { delay: 400 })
    ScrollReveal().reveal('.title', { delay: 500 })
    ScrollReveal().reveal('.description', { delay: 600 })

}
function liked() {
    let likes = document.querySelectorAll('.like');
    likes.forEach(like => {
        like.addEventListener('click', () => {
            like.classList.toggle('liked')
        })

    })
}

animationScroll()
liked()