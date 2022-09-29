//import imagemin from "gulp-imagemin";

const loadImg=(url,description) => {
	return new Promise((resolve,reject)=>{
		const photo=new Image();
		photo.width=200
		photo.src=url
		photo.alt=description
		//return photo
		photo.addEventListener('load',()=>{
			resolve(photo)
		})
		photo.addEventListener('error',err=>{
			reject(new Error(err))
		})
	})
	
}

export const createCardPhoto= async (photo)=>{
/* const card= `
	    <li class="card">
		<a id=${photo.id} class="grid-item" href="page.html?photo=1Er6ZqGPhgw">
		<img width="200" src=${photo.urls.small} alt="null">
            <a class="card__author" href=${photo.user.links.html}>
              <img class="author__photo" src=${photo.user.profile_image.small} role="presentation" alt="null" title=${photo.user.name}>
            </a>
            <button class="card__photo-like">${photo.likes}</button>
            <a class="card__download" href=${photo.links.download}' download="true" target="_blank"></a>
          </a></li>
	`  */

	const card = document.createElement('li')
	card.className="card"

	const gridItem=document.createElement('a')
	gridItem.id=photo.id
	gridItem.className="grid-item"
	gridItem.href=`page.html?${photo.id}`
/* 
	const gridImg=document.createElement('img')
	gridImg.width='200'
	gridImg.src=photo.urls.small
	gridImg.alt=null
	gridItem.append(gridImg) */

const gridImg=await loadImg(photo.urls.small,photo.alt_description)
	gridItem.append(gridImg)

	const cardAuthor=document.createElement('a')
	cardAuthor.className="card__author" 
	cardAuthor.href=photo.user.links.html
	

	const authorPhoto=document.createElement('img');
	authorPhoto.className="author__photo"; 
	authorPhoto.src=photo.user.profile_image.small; authorPhoto.role="presentation"; 
	authorPhoto.alt=null; 
	authorPhoto.title=photo.user.name;
	cardAuthor.append(authorPhoto);
	gridItem.append(cardAuthor)

	const cardLike=document.createElement('button')
	cardLike.className="card__photo-like"
	cardLike.textContent=`${ photo.likes }`
	gridItem.append(cardLike)

	const cardDownload=document.createElement('a')
	cardDownload.className="card__download" 
	cardDownload.href=photo.links.download;
	cardDownload.download=true
	cardDownload.target="_blank"
	gridItem.append(cardDownload)

	card.append(gridItem) 

	return card
}