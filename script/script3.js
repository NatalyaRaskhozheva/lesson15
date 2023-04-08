function MultChecker(min, max) {
	this.number = 7
	this.min = min
	this.max = max
	this.correctAnswer = 0
	this.incorrectAnswer = 0
}
MultChecker.prototype.getRandomExample = function () {
	let numberSecond = Math.floor(Math.random() * (this.max - this.min) + this.min)
	let rightAnswer = this.number * numberSecond
	let example = `${this.number} * ${numberSecond}`
	return {
		example,
		rightAnswer
	}
}
MultChecker.prototype.checkRightAnswer = function () {
	do {
		let {
			example,
			rightAnswer
		} = this.getRandomExample()
		let userResult = parseInt(prompt(example))
		if (userResult === rightAnswer) this.correctAnswer++
		else this.incorrectAnswer++
	} while (confirm('Хочете продовжити?'));

}
MultChecker.prototype.getResult = function () {
	return document.write(`Правильних - ${this.correctAnswer}<br> Неправильних - ${this.incorrectAnswer}`)
}

let a = new MultChecker(1, 9)
a.checkRightAnswer()
a.getResult()

