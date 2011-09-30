/*
 * Concept: extending function prototypes
 * 
 * 
 * 
 */

(function() {


	// defining the function / object 
	function People(){ }
	// you can think of this as a constructor
	
	
	// extending the prototype of that class
	People.prototype.walk = function(){
		return true;
	};
	
	// call People() and store the value in adam
	var adam = People();
	console.log('adam is undefined:', adam === undefined);
	
	// instantiate a People object and store it in abel
	var abel = new People();
	console.log('abel is a person:', abel.walk());
	
})();
