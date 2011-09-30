/*
 * Concept: Object types
 * 
 * shows the usefulness of instanceof
 * 
 * and the .constructor property
 */

(function() {

	// defining the function / object 
	function People(){ }
	
	var adam = new People();
	
	console.log('is adam an object?' , typeof adam);
	console.log('is adam a People?' , adam instanceof People);
	console.log('was adam created by the People constructor?', adam.constructor == People);
	
	var abel = new adam.constructor();
	
	console.log('is able an object?' , typeof abel);
	console.log('is abel a People?' , abel instanceof People);
	console.log('was abel created by the People constructor?', abel.constructor == People);
	

})();
