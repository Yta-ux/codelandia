import { addNotice, optionsLocalStorage } from './functions.js'

const recentNews = document.querySelector('.recent-news')
const releases = document.querySelector('.releases')
const highlightsMedias = document.querySelector('.highlights-medias')
const highlightsScroll = document.querySelector('.highlights-scroll');

optionsLocalStorage('title', 'Home')

addNotice(recentNews, 6, true, true)
addNotice(releases, 3, true, true)
addNotice(highlightsMedias, 3, true, true)
addNotice(highlightsScroll, 7, false, true)