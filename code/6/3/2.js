/*
 * Concept: breaking up a task into more usable chunks
 * 
 * because we use a setTimeout, this allows us to 
 * compute our task (which is just a counter in 
 * this example), we release control back to the 
 * browser so that we don't freeze the animation frames 
 * 
 */

(function() {

	// build up a large amount of work
	var start, stop,
		seconds = 20,	// a large amount of work
		steps = 20 * seconds, // break the work down
		iteration = 0; 	// keep track of current work
	
	// worker
	setTimeout(function() { 
	
		start = (new Date).getTime();
		stop = (new Date).getTime();
	
		// do some work for a fraction of the time
		while (stop-start < ((1000 * seconds) / steps)) {
			// console.log('new time');
			stop = (new Date).getTime();
		}
		
		if (iteration < steps) {
			// this releases control back to 
			// browser animation frame
			setTimeout(arguments.callee, 0);
		}
	
	},5000); // invoke 5 seconds after registering
	

})();