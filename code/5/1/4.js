/*
 * Concept: Inheritance and the Prototype Chain
 * 
 * 
 * 
 */

(function() {

	// defining the function / object 
	function People(){ }
	People.prototype.walk = function(){ return 'step step'; };
	People.prototype.talk = function(){ return 'blah'; };
	
	var adam = new People();
	
	function Coders(){}
	// this does not maintain the prototypial chain
	// if you use this line, then any changes to the 
	// prototype of Coders is a change to the prototype of People 
	// Coders.prototype = People.prototype;
	
	// this maintains the prototypial chain
	Coders.prototype = new People();  
	Coders.prototype.talk = function(){ return '1010'; }
	
	var john = new Coders();
	
	console.log('is john an object?' , typeof john);
	console.log('is john a Coders?' , john instanceof Coders);
	console.log('is john a People?' , john instanceof People);
	console.log('is john a Object?' , john instanceof Object);

	console.log('abilities: ');
	console.log('adam walking', adam.walk());
	console.log('adam talking', adam.talk());
	console.log('john walking', john.walk());
	console.log('john talking', john.talk());

})();
