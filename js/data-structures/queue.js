
const queue = {
	data: [],
	add: function (newData) {
		this.data.push(newData)
	},
	next: function () {
		return this.data.shift()
	}
}
/**
* enqueue: войти в очередь, добавить элемент в конец
* dequeue: покинуть очередь, удалить первый элемент и вернуть его
* front: получить первый элемент
* isEmpty: проверить, пуста ли очередь
* size: получить количество элементов в очереди
*/

function queue() {
	let collection = []

	this.print = function() {
			console.log(collection)
	}

	this.enqueue = function(element) {
			collection.push(element)
	}

	this.dequeue = function() {
			return collection.shift()
	}

	this.front = function() {
			return collection[0]
	}

	this.isEmpty = function() {
			return collection.length === 0
	}

	this.size = function() {
			return collection.length
	}
}