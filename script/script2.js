let auto = {
	brand: 'Range Rover',
	tankSize: 100,
	numberOfLitersAvailable: 20,
	numberOfSeats: 5,
	numberOfPassengers: 3,
	gasStation: function () {
		const emptyTank = this.tankSize - this.numberOfLitersAvailable
		let userLitr
		do {
			userLitr = parseFloat(prompt('Скільки літрів необхідно?'))
			if (userLitr <= emptyTank) {
				this.numberOfLitersAvailable += userLitr
				return alert(`Заповнено! Тепер ${this.numberOfLitersAvailable} літрів доступно`)
			}
			else alert('Забагато. Введіть ще раз!')
		}
		while (userLitr > emptyTank);

	},
	toString: function () {
		return `Кількість пасажирів: ${this.numberOfPassengers}`
	},
	addPassengers: function () {
		const emptySeats = this.numberOfSeats - this.numberOfPassengers
		let userPassengers
		do {
			userPassengers = parseInt(prompt('Скільки пасажирів треба додати?'))
			if (userPassengers <= emptySeats) {
				this.numberOfPassengers += userPassengers
				return alert(`Додано! Тепер ${this.numberOfPassengers} пасажирів`)
			}
			else alert('Не вистачає місць!')
		} while (userPassengers > emptySeats);
	},
	landingPassengers: function () {
		let userLandingPas
		do {
			userLandingPas = parseInt(prompt('Скільки пасажирів треба висадити?'))
			if (userLandingPas > this.numberOfPassengers) {
				if (confirm('Це значення більше, ніж є пасажирів всього. Хочете висадити всіх?') == true) {
					this.numberOfPassengers = 0
					alert('Всі висажені!')
				}
				else userLandingPas = false
			}
			else {
				this.numberOfPassengers -= userLandingPas
				alert(`${userLandingPas} Висажено!  ${this.numberOfPassengers} залишився`)
			}
		} while (userLandingPas === false);
	}
}
auto.gasStation()
console.log(auto.toString())
auto.addPassengers()
auto.landingPassengers()
console.log(auto.numberOfPassengers)