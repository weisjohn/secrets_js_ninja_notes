/*
 * Concept: 
 * 
 * locking a browser is a stupid thing to do
 * 
 * Chrome / FF7.0 hate this code, locking on purpose
 * 
 */

(function() {

	setTimeout(function() { 

	var start = (new Date).getTime(),
		stop = (new Date).getTime(),
		seconds = 10;
		
	// don't let the browser have control for 10 secs
	while (stop - start < (1000 * 10)) {
		stop = (new Date).getTime();
	}
	console.log('finished');

	}, 5000);

})();

