/*
 * Concept: The `with` statement
 * 
 * A with statement creates a scope within which the properties of a specified object can be referenced without the need of a prefix.
 */

(function() {

	var a = 5, b = 6;

	var local = { 'local' : 'object' };

	var context = {
		'local' : function() {
			console.log('selecting context');
		}
	}

	console.log('a + b ==', a + b);
	console.log('typeof local === "object"', typeof local === "object");

	with (context) {
		console.log('\tin with (context)');
		console.log('\ttypeof local === "object"', typeof local === "function");

		console.log('\tthis !== context', this !== local);
		console.log('\tthis === window', this === window); // with doesn't change execution contexts, so we can still reach variables in this context
		console.log('\ta + b ==', a + b);
	}

	console.log('typeof local === "object"', typeof local === "object");

})();

