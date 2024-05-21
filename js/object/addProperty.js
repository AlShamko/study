var questions = [{
	question: "What's the currency of the USA?",
	choices: ["US dollar", "Ruble", "Horses", "Gold"],
	corAnswer: 0
}, {
	question: "Where was the American Declaration of Independence signed?",
	choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
	corAnswer: 0
}];

console.log(questions)

const newQuestions = questions.map(item => item['usersAnswer'] = null)

console.log(questions)



const myCar = [{model: 'opel'},{model : 'Ford'},{model : 'BMW'}]
console.log(myCar)

const newMyCar = myCar.map(item => item['newModel'] = 'mers')

console.log(myCar)