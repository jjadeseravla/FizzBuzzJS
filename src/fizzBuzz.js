function FizzBuzz() {
}

FizzBuzz.prototype.playFizzBuzz = function(number) {
				if(number % 15 === 0) {
						return 'fizzbuzz';
				}	else if(number % 3 === 0) {
						return 'fizz';
				} else if(number % 5 === 0) {
						return 'buzz';
				} else {
						return number;
				}
};


var fizzbuzz = new FizzBuzz();

for(var i = 1; i < 100; i++) {
		console.log(fizzbuzz.playFizzBuzz(i));
};
