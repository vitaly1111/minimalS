import { createCardPhoto } from "./createCardPhoto"
import { scrollLoad } from "./scrollLoad"
import Masonry from "masonry-layout"



export const renderData=(wrapper,data) => {
	const gallery=document.createElement("ul")
	gallery.className="grid"

	const endEl=document.createElement('div')
	//console.log(gallery)
	//console.log(data)
	wrapper.append(gallery)
	const grid=new Masonry(gallery,{
		gutter: 10,
		itemSelector: '.card',
		columnWidth: 200,
		isFitWidth: true
	})
	const cards=data.map(createCardPhoto)
	/* 	data.forEach(itemPhoto => {
			let card=createCardPhoto(itemPhoto);
			cards.push(card)
			gallery.insertAdjacentHTML('beforeend',card)
		}); */

	Promise.all(cards)
		.then((cards) => {
			console.log(cards)
			gallery.append(...cards)
			grid.appended(gallery)
			wrapper.append(endEl)
			scrollLoad(gallery,grid,endEl)
		})
}