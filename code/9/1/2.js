/*
 * Concept: the Function constructor
 * 
 * the Function constructor doesn't maintain closures
 */

(function() {

	// simple constructor
	var add = new Function("a", "b", "return a + b");
	console.log("add(2,4) == 6;", add(2,4) == 6 );


	// no closures are maintained, could be a good thing when we don't want a bunch of overhead
	var closable = "won't be defined";
	(function() {
		var subtract = new Function("a", "b", "console.log('typeof closable: ', typeof closable); return a-b;")
		console.log("subtract(5,3) == 2:", subtract(5,3));
	})();


})();

