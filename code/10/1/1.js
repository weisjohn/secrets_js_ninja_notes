/*
 * Concept: The `with` statement
 * 
 * A with statement creates a scope within which the properties of a specified object can be referenced without the need of a prefix.
 */

(function() {

	var local = { 'local' : 'object' };

	var context = {
		'local' : function() {
			console.log('selecting context');
		}
	}

	console.log('typeof local === "object"', typeof local === "object");

	with (context) {
		console.log('\tin with (context)');
		console.log('\ttypeof local === "object"', typeof local === "function");
	}

	console.log('typeof local === "object"', typeof local === "object");

})();

