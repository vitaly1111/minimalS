const buttons=document.querySelectorAll('.advantages__btn');
const contentItems=document.querySelectorAll('.advantages__item-content');

export const advantages=()=>{
	buttons.forEach((button,i)=>{
		button.addEventListener('click',()=>{
			contentItems.forEach((item,j)=>{
				if(i===j){
					buttons[j].classList.add('button__advantages-active')
					contentItems[j].classList.add('content-active')
				}else{
					buttons[j].classList.remove('button__advantages-active')
					contentItems[j].classList.remove('content-active')
				}
			})
		})
	})
}