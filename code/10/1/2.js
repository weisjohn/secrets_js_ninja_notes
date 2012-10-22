/*
 * Concept: The `with` statement
 * 
 * Assignments are possible within the `with` statement, however
 * - new properties are created in the global scope
 */

(function() {

	var context = {
		'local' : function() {
			console.log('selecting context');
		}
	}

	console.log('typeof scoped === "string"', typeof scoped === "string");

	with (context) {
		scoped = "this is possible";
		console.log('\ttypeof scoped === "string"', typeof scoped === "string");
	}

	console.log('typeof scoped === "string"', typeof scoped === "string");

	console.log('new properties are created in the global scope');
	console.log('context.scoped == window.scoped', context.scoped == window.scoped);

})();

