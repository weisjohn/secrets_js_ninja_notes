/*
 * Concept: 
 * 
 * 
 * 
 */

(function() {

	var pattern1 = /test/;
	var pattern2 = new RegExp("test");

	console.log( pattern1.test("test") && pattern2.test("test") );



})();
