import { addNotice, optionsLocalStorage } from './functions.js'


optionsLocalStorage('title', 'New')

const divImages = document.querySelectorAll('.new-image')
const recentNews = document.querySelector('.recent-news')
const linkImage = localStorage.getItem('url')

addNotice(recentNews, 6, true, true)

divImages.forEach(divImage => {
    divImage.style.backgroundImage = `${linkImage}`
})