/*
 * Concept: Memoization
 * 
 * 
 * a function can have a property, 
 * therefore, pre-calculated results from that function 
 * can be stored to speed up that function
 * 
 */

(function() {

	function getElements( name ) {
		// if the cache doesn't exist, attach a cache
		if (!getElements.cache) getElements.cache = {};
	
		return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name);
	}
	
	getElements("img");
	getElements("div");
	
})();
