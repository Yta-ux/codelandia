export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function slogan(numberImage, isDescription, isButton) {
    const divSlogan = document.createElement("div");
    const divContent = document.createElement("div");

    divSlogan.classList.add("slogan");
    divContent.classList.add("content");

    if (isButton) {
        const btn = document.createElement("button");

        btn.classList.add("btn");
        btn.innerHTML = "Lorem";

        divContent.appendChild(btn);
    }

    if (isDescription) {
        const description = document.createElement("p");

        description.classList.add("title");
        description.classList.add("description");
        description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.";

        divContent.appendChild(description);
    }

    divSlogan.appendChild(divContent);
    divSlogan.style.backgroundImage = `url('../assets/images/slogans/home-${numberImage}.jpg')`;

    return divSlogan
}

export function noticeScroll(numberImage) {
    const notice = document.createElement('div');
    const information = document.createElement('div');
    const titleInformation = document.createElement('h2');
    const descriptionInformation = document.createElement('p');
    const dateInformation = document.createElement('span');
    const btnInformation = document.createElement('button');

    notice.classList.add('notice')
    information.classList.add('information');
    titleInformation.classList.add('title');
    titleInformation.classList.add('information-title');
    descriptionInformation.classList.add('information-description');
    dateInformation.classList.add('information-date');
    btnInformation.classList.add('information-read');

    titleInformation.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.";
    descriptionInformation.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...";
    dateInformation.innerHTML = "00/00/0000";
    btnInformation.innerHTML = "Ler notícia"

    information.appendChild(titleInformation);
    information.appendChild(descriptionInformation);
    information.appendChild(dateInformation);
    information.appendChild(btnInformation);

    notice.appendChild(slogan(numberImage, false, true));
    notice.appendChild(information);

    return notice
}

export function addNotice(father, amount, isDescription, isButton) {
    let i = 0
    while (i < amount) {
        const randomNumberPhoto = getRandomInt(0, 18)

        if (isDescription) {
            father.appendChild(slogan(randomNumberPhoto, isDescription, isButton));
        } else {
            father.appendChild(noticeScroll(randomNumberPhoto))
        }
        i++
    }
}

export function optionsLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

export function locationSlogan() {

    const sloganHTML = document.querySelectorAll('.slogan')
    sloganHTML.forEach((slogan) => {
        slogan.addEventListener("click", () => {
            const styleSlogan = window.getComputedStyle(slogan)
            const backgroundSlogan = styleSlogan.getPropertyValue('background-image')

            optionsLocalStorage('url', backgroundSlogan)

            location = 'new.html'
        })
    })
}

export function changeTitleSection(pageTitle) {
    const coverTitle = document.querySelector('.cover-title')
    coverTitle.innerHTML = pageTitle
}

export function menuInteration() {
    const menuOptions = document.querySelectorAll('.menu-link')

    let options = Array.from(menuOptions)
    options.splice(0, 1)

    options.forEach(option => {
        option.addEventListener('click', () => {
            const dataValueTitle = option.dataset.title
            optionsLocalStorage('title', dataValueTitle)
        })
    })
    const titleLocalStorage = localStorage.getItem('title')
    document.title = `${titleLocalStorage} | Naped`
}

export function activeModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    const btnModal = document.querySelector('.content-btn')
    const btnAccount = document.querySelector('.account');

    btnAccount.addEventListener('click', () => {
        modal.classList.toggle('active')
        body.classList.toggle('active')
    })

    btnModal.addEventListener('click', () => {
        modal.classList.toggle('active')
        body.classList.toggle('active')
    })
}