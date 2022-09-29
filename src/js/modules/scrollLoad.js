import { getData } from "./getData"
import { createCardPhoto } from "./createCardPhoto"

export const scrollLoad=(gallery,grid,endEl) => {
	const observer=new IntersectionObserver(
		async (entryes) => {
			if (entryes[0].isIntersecting) {
				const data=await getData()
				const cards=data.map(createCardPhoto)
				Promise.all(cards)
					.then((cards) => {
						console.log(cards)
						gallery.append(...cards)
						grid.appended(cards)
						
					})
		 }
		},
		{
		   rootMargin:'100px'
		}
	)
	observer.observe(endEl)
}