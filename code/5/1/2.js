/*
 * Concept: extending an object with both a prototyped method and a method within the constructor function
 * 
 * This illustrates a seemingly peculiar aspect of application from prototypes
 * 
 * 1. Properties are bound to the object instance from the prototype.
 * 2. Properties are bound to the object instance within the constructor function.
 * 
 */

(function() {

	// defining the function / object 
	function People(){ 
		
		this.talk = function() {
			return 'goodbye';
		}
	}
	
	// overriding the prototype of that class
	People.prototype.talk = function(){
		return 'hello'; 
	};
	
	
	// instatiate a person
	var adam = new People();
	console.log('you say goodbye, i say:', adam.talk());
	

})();
