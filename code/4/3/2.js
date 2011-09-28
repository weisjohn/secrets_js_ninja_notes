/*
 * Concept: Partially Applying Functions
 *
 * Curry-ing, but with gaps in the arguments, so that we can specify different parameters, other than the first one...
 *
 */
(function(){


    // this partially applies some arguments 
    Function.prototype.partial = function(){
        var fn = this, args = Array.prototype.slice.call(arguments);
        return function(){
            var arg = 0;
            for (var i = 0; i < args.length && arg < arguments.length; i++) 
                if (args[i] === undefined) 
                    args[i] = arguments[arg++];
            return fn.apply(this, args);
        };
    };
    
    function drive(speed, vehicle){
    
        if (speed == 'fast') {
            console.log(vehicle, "goes", "vroooooooom");
        }
        else 
            if (speed == "medium") {
                console.log(vehicle, "goes", "normally");
            }
            else {
                console.log(vehicle, "goes", speed);
            }
        
    }
    
    drive("medium", "truck");
    drive("really slow", "a turtle");
	
	var boat = drive.partial(undefined, "boat");
	boat("slow");
	var boat_again = drive.partial(undefined, "boat");			// looks like you can only use this once?!
	boat_again("can't reuse the boat again...");
    
})();
