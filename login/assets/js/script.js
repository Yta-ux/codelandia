function typed() {
    let typed = new Typed('.typed', {
        strings: ["Faça login na sua conta"],
        typeSpeed: 80,
    })
}

function customChecked() {
    const checkbox = document.querySelector('.checkbox');
    const customCheckbox = document.querySelector('.custom-checkbox');

    customCheckbox.addEventListener('click', () => {

        if (checkbox.getAttribute("checked")) {
            console.log(checkbox)
            checkbox.removeAttribute("checked")
        } else {

            checkbox.setAttribute("checked", true)
            console.log('Entrei')

        }
    })
}

typed()
customChecked()