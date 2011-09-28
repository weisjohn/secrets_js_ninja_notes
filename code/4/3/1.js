/*
 * Concept: Curry-ing
 * 
 * Curry-ing is a method of partially applying functions, 
 * 		so as to have a partial definition for easier use...
 * 
 */
(function(){


	// this partially applies some arguments 
    Function.prototype.curry = function(){
        var fn = this, 
			args = Array.prototype.slice.call(arguments);
        return function(){
            return fn.apply(this,		// this is the magic line, "fn" refers to the function before we return ('drive')
				args.concat(Array.prototype.slice.call(arguments)));  // this is the magic line, mixin the arguments
            															
        };
    };
	
	function drive(speed, vehicle) {
		
		if (speed == 'fast') {
			console.log(vehicle, "goes", "vroooooooom");
		} else if (speed == "medium") {
			console.log(vehicle, "goes", "normally");
		} else {
			console.log(vehicle, "goes", speed);
		}
		
	}
    
	var race = drive.curry("fast");
		
	race("car");
	race("boat");
	
	drive("medium", "truck");
	
	drive("really slow", "a turtle");
	
	
})();
