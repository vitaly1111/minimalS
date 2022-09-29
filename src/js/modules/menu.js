const menuBtn=document.querySelector('.header__button')
const menu=document.querySelector('.navigation')

export const menuButton=()=>{
	menuBtn.addEventListener('click',()=>{
		menu.classList.toggle('header__nav--active')
	})
}