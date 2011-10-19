/*
 * Concept: Timers only run one at a time...
 * 
 * The console should counts of groups of "a"s 
 * and "b"s in multiples of ten, because the timers
 * never interrupt one another
 * 
 */

(function() {

	
	var t1 = setInterval(function() {
		for (var i = 0; i<10; i++) { 
			console.log('a'); 
		} 
	}, 19);
	
	var t2 = setInterval(function() {
		for (var i = 0; i<10; i++) { 
			console.log('b'); 
		} 
	}, 31);	
	
	// kill the intervals to not flood console
	setTimeout(function() {
		clearInterval(t1);
		clearInterval(t2); 
	}, 500);

})();
