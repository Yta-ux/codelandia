import { addNotice, changeTitleSection } from './functions.js';

const catalogue = document.querySelector('.catalogue');
const coverBackground = document.querySelector('.cover');
const titleSection = localStorage.getItem('title')

changeTitleSection(titleSection)
addNotice(catalogue, 9, true, false)

if (titleSection == 'Séries') {
    coverBackground.style.backgroundImage = `url('../../assets/images/covers/big_bang.jpg')`
}
else if (titleSection == 'Filmes') {
    coverBackground.style.backgroundImage = `url('../../assets/images/covers/spiderman.jpg')`
}
else if (titleSection == 'Animes') {
    coverBackground.style.backgroundImage = `url('../../assets/images/covers/pokemon.jpg')`
}
else if (titleSection == 'Games') {
    coverBackground.style.backgroundImage = `url('../../assets/images/covers/mario.jpg')`
}