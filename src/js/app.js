import * as flsFunctions from "./modules/functions.js"
import Swiper, { Navigation, Pagination } from 'swiper';
const popupLink = document.querySelector('.certificate__link')
const popupLinkBurger = document.querySelector('.certificate__link-burger')
const certificate = document.querySelector('.popup')
const content = document.querySelector('.popup__content')
const popupBtn = document.querySelector('.popup__btn')
const popupImg = document.querySelector('.popup__img')
const popupImg2 = document.querySelector('.popup__img2')
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
})

popupLink.addEventListener('click', (e) => {
  console.log('open')
  certificate.classList.add('open')
  e.preventDefault()
})

popupLinkBurger.addEventListener('click', (e) => {
  console.log('open')
  certificate.classList.add('open')
  e.preventDefault()
})

window.addEventListener('click', (e) => {
  if (e.target == certificate) {
    certificate.classList.remove('open')
    console.log('close');
  }
})



popupBtn.addEventListener('click', (e) => {
  content.style.transform = 'rotateY(180deg)'
  popupBtn.style.display = 'none'
  popupImg.style.display = 'none'
  popupImg2.style.transform = 'rotateY(180deg)'
  popupImg2.style.display = 'block'
  e.preventDefault()
})





flsFunctions.isWebp()
const swiper = new Swiper()
