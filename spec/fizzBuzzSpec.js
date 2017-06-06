describe('FizzBuzz', function() {
		var fizzbuzz;
		
		beforeEach(function() {
			fizzbuzz = new FizzBuzz();
		});

	describe('can find the divisable number', function() {
		it('can be divided by 3', function() {
			expect(fizzbuzz.playFizzBuzz(3)).toEqual('fizz');
		});
		
		it('can be divided by 5', function() {
			expect(fizzbuzz.playFizzBuzz(5)).toEqual('buzz');
		});	

		it('can be divided by 3 and 5', function() {
			expect(fizzbuzz.playFizzBuzz(15)).toEqual('fizzbuzz');
		});

		it('cannot be divided by 3 or 5', function() {
			expect(fizzbuzz.playFizzBuzz(7)).toEqual(7);
		});
	});
});
