let range = {
	myArray: [1, 0, 1, 1, 1, 0, 0, 1],

	currentOne: function () {
		let current = 0
		for (const element of this.myArray) {
			if (element === 1) current++
		}
		return current
	},
	shot: function () {
		let a = this.currentOne()
		let currentHitting = 0
		do {
			let userIndex = parseInt(prompt(`Введіть значення клітинки куди хочете поцілитися? Від 0 до ${this.myArray.length - 1}`))
			if (this.myArray[userIndex] === 1) currentHitting++, alert('Попали!')
		} while (currentHitting < a)
		return alert('Гра закінчена! Всі цілі знищено!')
	}
}
range.shot()
