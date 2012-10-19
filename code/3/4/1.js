/*
 * Concept: Specifying the execution context by invoking with .call()
 * 
 * .call() allows you to specify the context by passing an object
 * 
 */

(function() {


	function funx() {
		// simply will return the member of caller
		// `this` refers to the caller 
		return this.v;
	}
	
	console.log('returns', funx.call({ v : 1 })); // should return 1
	console.log('returns', funx.call({ a : 1 })); // should return undefined
	

	console.log('typeof v ' + (typeof v) );
	console.log('returns ' + funx());

	// this = window if you simply invoke a function 
	console.log('touching v');
	window.v = 2;
	console.log('typeof v ' + ( typeof v) );
	console.log('returns ' + funx());
	
})();
