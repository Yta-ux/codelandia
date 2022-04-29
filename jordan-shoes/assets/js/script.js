function typed() {
    let typed = new Typed('#typed', {
        strings: [
            "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
        ],
        typeSpeed: 30,
        smartBackspace: false
    })
}

function reveal(){
    const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 2000,
    })


    ScrollReveal().reveal('.title', {delay: 200})
    ScrollReveal().reveal('.description', {delay: 400})
    ScrollReveal().reveal('.shoes-item', {delay: 600})
}

typed()
reveal()