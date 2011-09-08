/*
 * Concept: Variable argument lengths
 * 
 * Functions can receive any number of arguments
 * 
 */

(function() {

	function random_choice() {
		
		// i just learned how to do this by watching Crockford's video tonight!  huzzah!
		return Array.prototype.slice.call(arguments)[ Math.floor(Math.random() * arguments.length) ];
	
	}
	
	console.log('random choice', random_choice(0) );
	console.log('random choice', random_choice('pi', 'e', 'tau', 'phi') );
	console.log('random choice', random_choice( 1, 3, 5, 7, 9, 11, 13, 15 ) );
	
	
})();
