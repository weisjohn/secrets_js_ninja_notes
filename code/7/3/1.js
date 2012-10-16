/*
 * Concept: Dynamic Regex Parsing
 * 
 * Speed Considerations
 * 
 */

(function() {

	function bench(iterations, test) {
		if (typeof test == "function") {
			var start = Date.now();
			console.log('start: ' + start)
			for (var i = 0; i < iterations; i++) {
				test();
			}
			var end = Date.now()
			console.log('end: ' + end)
			console.log(iterations + ' iterations took ' + (end-start) + 'ms');
		}
	}


	var foo1 = new RegExp("foo", "i");
	var foo2 = /foo/i;

	// testing with a compiled regex takes the same amount of time no matter how that regex is compiled

	bench(100000, function() { foo1.test("sample Foo"); });
	bench(100000, function() { foo2.test("sample Foo"); });

	// testing the speed of compliation, whether literal or construction regex compilation is faster
	bench(10000, function() { 
		var foo1 = new RegExp("foo", "i");
		foo1.test("sample foo bar");
	});

	bench(10000, function() { 
		var foo2 = /foo/i;
		foo2.test("sample foo bar");
	});



})();

