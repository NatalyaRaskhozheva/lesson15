function Banner(img) {
	this.img = img
}
Banner.prototype.getRandomBanner = function () {
	let randomIndex = Math.floor(Math.random() * this.img.length)
	return this.img[randomIndex]
}
Banner.prototype.getInputBanner = function () {
	let randomBanner = this.getRandomBanner()
	document.write(`<img src="${randomBanner.img}"><br>`)
	document.write(`<a href= "${randomBanner.link}">Натисніть сюди</a>`)
}

let img = [
	{
		img: '../img/img1.jpg',
		link: 'https://www.notino.ua/'
	},
	{
		img: '../img/img2.jpg',
		link: 'https://rozetka.com.ua/ua/'
	},
	{
		img: '../img/img3.jpg',
		link: 'https://www.ctrs.com.ua/'
	}
]
let a = new Banner(img)
a.getInputBanner()
