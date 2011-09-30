/*
 * Concept: Extending prototypes can help you add language features that are coming in a future friendly way
 *  
 * forEach
 * 
 */

(function() {

	// if there is no definition for the forEach function
	if (!Array.prototype.forEach){
		
											   // a particular context
		Array.prototype.forEach = function(fn, thisp) {
			
			for (var i = 0; i < this.length; i++) {
				// call the function, passing in the thisp context or null
										// pass args of (value, index, array)
				fn.call( thisp || null, this[i], i, this);
			}
			
		}
	}

	[3, 4, 5].forEach(function(v, i, a){
		console.log(i,":", v);
	});


})();
