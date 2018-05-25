function Greetr() {
	this.greeting = 'Initial in Greetr';
	this.greet = function(text) {
		console.log(this.greeting + text);
	}
}

module.exports = Greetr;