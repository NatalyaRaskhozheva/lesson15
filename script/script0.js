// let user = {
// 	name: 'Ivan',
// 	surname: 'Kovalenko',
// 	age: 25,
// 	sayHi: function () {
// 		alert(`Hi! від ${this.name}`)
// 	},
// 	sayBye: function () {
// 		alert('Bye!')
// 	}
// }
// user.sayHi()

let obj1 = {
	array: [9, 7, 6, 13, 5],
	getSum: function (min, max) {
		sum = 0
		for (const element of this.array) {
			if ((element >= min) && (element <= max)) sum += element
		}
		return sum
	}
}

let obj2 = {
	array: [4, 8, 1, 3, 15],
	getProduct: function (min, max) {
		product = 1
		for (const element of this.array) {
			if (element >= min && element <= max) product *= element
		}
		return product
	}
}
alert(obj1.getSum.call(obj2, 1, 10))
alert(obj2.getProduct.apply(obj1, [1, 6]))
