const heroBtn=document.querySelector('.hero__button')
const overlay=document.querySelector('.overlay')
const modal=document.querySelector('.modal')
const form=document.querySelector('.modal__form')

const modalTitle=document.querySelector('.modal__title')


export const popup=async () => {
	overlay.style.transitionDuration='0.36s'
	modal.style.transitionDuration='0.36s'
	heroBtn.addEventListener('click',() => {
		overlay.classList.add('overlay-open')
		modal.classList.add('modal-open')
	})
	overlay.addEventListener('click',(e) => {
		if (!e.target.closest('.modal')||e.target.closest('.modal__close')) {
			overlay.classList.remove('overlay-open')
			modal.classList.remove('modal-open')
		}
	})
	form.addEventListener('submit',e => {
		e.preventDefault();
		console.log('submit')
		const data={
			name: form.name.value,
			surname: form.surname.value,
			tel: form.tel.value,
		}

		console.log(data)

		fetch('https://api-form-order.herokuapp.com/api/order',{
			method: 'POST',
			body: JSON.stringify(data),
		}
		)
		.then(res=>{
			return res.json()
		})
		.then(person=>{
			modalTitle.textContent=`${person.name}, ваша заявка ${person.id} успешно отправлена`
			form.remove()

			setTimeout(()=>{
				overlay.classList.remove('overlay-open')
				modal.classList.remove('modal-open')
			},3000)
		})
	})
}