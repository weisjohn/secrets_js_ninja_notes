/*
 * Concept: Specifying the execution context by invoking with .call()
 * 
 * .call() allows you to specify the context by passing an object
 * 
 */

(function() {

	function funx() {
		// simply will return the type of caller
		return this.v;
	}
	
	console.log('returns', funx.call({ v : 1 })); // should return 1
	console.log('returns', funx.call({ a : 1 })); // should return undefined
	
})();
