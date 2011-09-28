/*
 * Concept: Using closures mixed with .apply() and / or .call() to help maintain context
 * 		and overcome the "this" problem 
 * 
 */

(function() {

	function bind(context, name){
		return function(){										// we return a function to explicitly set the context of the execution
			return context[name].apply(context, arguments);		// context and name are enclosed
		};
	}
	
	var Button = {
		click: function(){
			console.log('clicking');
			this.clicked = true;		// the reference to this is the problem
		}
	};
	
	var EventRunner = {					// this is a shitty event runner and it's not legit
		
		funx : [],
		add : function(fun) {
			this.funx.push(fun);
		},
		run : function() {
			this.funx.pop()();			// incompleteness here, not a real event runner
		}
		
	};
	
	
	EventRunner.add(Button.click);
	EventRunner.run();
	console.log("not clicked", typeof Button.clicked);
	
	EventRunner.add(bind(Button, "click"));  	// the call to .bind() returns a callback that has a "hardened" context
	EventRunner.run();
	console.log("clicked", Button.clicked);
		
	
})();
