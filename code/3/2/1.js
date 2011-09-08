/*
 * Best practice: named, inline functions
 * 
 * a function that is inline, can have a name, but that name is only visibile to itself
 * 
 * 
 */

(function() {

	var coder = { 
	
		code : function write_code(c) {
			
			console.log('coding: ', c);
			
		}
	
	}
	
	coder.code('this will make it out there');
	coder.write_code('results in a Reference Error');
	
})();
