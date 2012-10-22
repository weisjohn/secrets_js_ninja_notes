
// simple timer for performance calculations
function bench(iterations, test) {
	if (typeof test == "function") {
		var start = Date.now();
		console.log('start: ' + start);
		for (var i = 0; i < iterations; i++) {
			test();
		}
		var end = Date.now();
		console.log('end: ' + end);
		console.log(iterations + ' iterations took ' + (end-start) + 'ms');
	}
}