function capitalize(string) {
	const firstLetter = string.slice(0, 1)

	const upper = firstLetter.toUpperCase()
	
	const result = upper + string.slice(1)
	
	return result
}


capitalize('aria')