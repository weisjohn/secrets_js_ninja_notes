/*
 * Concept: Simple closure example
 * 
 */

(function() {

	function funk() {
		console.log('funk was able to call jazz');
		jazz();
	}
	
	function jazz() {
		console.log('defined after the function', variables_are_hoised);
	}
	
	var variables_are_hoised = true,
		variables_are_closed = true;
	
	funk();
	
})();
