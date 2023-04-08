function Dance(boys, girls) {
	this.boys = boys
	this.girls = girls
}
Dance.prototype.getNameBoy = function () {
	let randomIndexBoy = Math.floor(Math.random() * this.boys.length)
	return this.boys[randomIndexBoy]
}
Dance.prototype.getNameGirl = function () {
	let randomIndexGirl = Math.floor(Math.random() * this.girls.length)
	return this.girls[randomIndexGirl]
}
Dance.prototype.getRandomCouple = function () {
	let boy = this.getNameBoy()
	let girl = this.getNameGirl()
	return alert(`${boy} i ${girl}`)
}
Dance.prototype.run = function () {
	return setInterval(() => {
		this.getRandomCouple()
	}, 5000)
}
const arrayBoys = ['John', 'Ivan', 'Fedor', 'Kostya', 'Igor']
const arrayGirls = ['Natalya', 'Dasha', 'Diana', 'Katya', 'Ira']

let a = new Dance(arrayBoys, arrayGirls)
a.run()
