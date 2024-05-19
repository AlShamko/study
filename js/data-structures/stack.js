const stack = {
	data: [],
	add: function (newData) {
		this.data.push(newData)
	},
	next: function () {
		return this.data.pop()
	}
} 

/**
 * push: добавить новый элемент
 * pop: удалить верхний элемент, вернуть его
 * peek: вернуть верхний элемент
 * length: вернуть количество элементов в стеке
 */

function Stack() {
	this.count = 0
	this.storage = {}

	this.push = function(value) {
			this.storage[this.count] = value
			this.count++
	}

	this.pop = function() {
			if (this.count === 0) return undefined
			this.count--
			let result = this.storage[this.count]
			delete this.storage[this.count]
			return result
	}

	this.peek = function() {
			return this.storage[this.count - 1]
	}

	this.size = function() {
			return this.count
	}
}