/*
 * Concept: functions can have properties
 * 
 * 
 * a function is an object
 * objects can have properties
 * 
 * ergo: functions can have properties
 * 
 */

(function() {

	function foo() {
		
		// if foo.d isn't definted
		if (!foo.d) {
			foo.d = "this shit is bananaz";
		} else {
			console.log(foo.d);
		}
		
	}
	
	console.log('before touching foo.d');
	foo();
	console.log('after touching foo.d');
	foo();
	
})();
