import * as flsFunctions from "./modules/functions.js"
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp()
const swiper = new Swiper()

const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
})