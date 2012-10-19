/*
 * Concept: Generic Compilation
 * 
 * 
 * 
 */

(function() {

	function find_string_with_word(match, source) {

		// double escape 
		var regex = new RegExp("(^|\\s)" + match + "(\\s|$)");

		console.log( regex.test(source) );
	}

	find_in_string("sample", "A sample test string");
	find_in_string("false", "This isn't in the string");

})();