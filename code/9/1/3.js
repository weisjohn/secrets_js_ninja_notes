/*
 * Concept: eval vs Function()
 * 
 * it doesn't look like there's anything significantly different in timing
 */

(function() {

	console.log('testing eval()');
	bench(100, function() {

		var assert = eval("(function (test) { return !!test; })");
		assert(true);

	});

	console.log('testing Function()');
	bench(100, function() {

		var assert = new Function("test", "return !!test");
		assert(true);

	});


	console.log('testing eval()');
	bench(100, function() {

		var add = eval("(function (a, b) { return a + b; })");
		add(2,3) == 5;

	});

	console.log('testing Function()');
	bench(100, function() {

		var add = new Function("a", "b", "return a + b");
		add(2,3) == 5;

	});

})();

