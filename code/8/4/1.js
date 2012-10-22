/*
 * Concept:  A central timer control
 *
 * 6.3.2 was a good solution for one problem...
 * however, managing multiple times could get un-
 * weildy
 * 
 * this code is straight out of the book... it's pretty dense 
 * and could be cleaned up a little bit...
 * 
 * 
 * note from the chapter: 
 * implementing our timer / event queue in this manner means   
 * callbacks are run in the order that they are registered
 * which is not always the case 
 * 
 */
(function(){

	// this is a timer registration factory
    var timers = {
    
        timerID : 0,
        timers : [],
        
        add: function(fn){
            this.timers.push(fn);
        },
        
        start : function(){
            if (this.timerID) return;
            (function(){
				// if there are any timers left
                if (timers.timers.length > 0) {
					// loop over the timers
                    for (var i = 0; i < timers.timers.length; i++) {
						// find the timers that are done and clean them out
                        if (timers.timers[i]() === false) {
                            timers.timers.splice(i, 1); // first time i've seen .splice in JS
                            i--;
                        }
                    }
					
					// execute the next item in the queue
					
					// arguments.callee refers to us,
						// because of the self-executing annonymous function!
                    timers.timerID = setTimeout(arguments.callee, 0);
					// set the timerID value to keep track of which timer is running
                }
            })();
        },
    
		stop : function() {
			// this.timerID always refers to the currently executing timer
			clearTimeout(this.timerID);
			this.timerID = 0;
		}
	
    };
    
    // use the actual timer
	timers.add(function() { 
		console.log()
	});
	
})();

