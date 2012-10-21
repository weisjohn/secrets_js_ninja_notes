/*
 * Best practice: testing
 * 
 * a function with a signature like this was mentioned:
 * 		assert(condition,message);
 * 
 * calling something like this:
 * 		assert(a == 1, "Disaster! A is not 1!");
 * 
 * I decided to make a function now, and compare once he gives me his...
 */

(function() {

	function assert(condition, message) {
		
		// modifying a truthy / falsey value and 
		if (!!!condition) {
			console.warn(message); 
		} 
		
	}
	
	assert(true, "success");	// should show nothing
	assert(false, "failure"); 	// should consle warn "failure"
	
})();
