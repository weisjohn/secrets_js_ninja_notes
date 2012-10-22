/*
 * Concept: The `with` statement is slow
 * 
 * `with` performs more slowly than object accessors
 */

(function() {

	var context = {
		'a' : 42
	}

	console.log('testing creation of `with (contexts)`');
	bench(100000, function() {
		with (context) {
			b = a + a;
		}
	});

	console.log('testing benching inside a `with` context');
	with (context) {
		bench(100000, function() {
			b = a + a;
		});
	};

	console.log('testing with a simple loop');
	bench(100000, function() {
		var b = context.a + context.a;
	});

})();

