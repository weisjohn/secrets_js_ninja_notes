/*
 * Concept: Enforcing the correct context with arguments.callee and instaceof
 * 
 * if someone calls your constructor, you can poison the global namespace because of references to this.
 * 
 */

(function() {


	// defining the function / object 
	function LeakyWidget(w){
		this.widget = w;
	}
	
	// by not using the new keyword, we poison the global namespace
	var widget = "sproket";
	
	// this line is intended to instantiate a new leaky
	var factory = LeakyWidget("springs");
	
	console.log('factory is', typeof factory);	// Resig's examples are in the global space, but i'm inside an annonymous function...
	console.log('widget has been reassigned:', this.widget);

	
	// this constructor doesn't pollute the global namespace 
	function StrongWidget(w){
		
		// this is a beautiful line
			// we're checking to see if we're currently inside of an instantiated version of the function
			// "this" - the current execution context
			// if we are in the context (this) of a 
		if ( !( this instanceof arguments.callee)) {
			return new StrongWidget(w);
		}
		
		this.widget = w;
	}
	
	widget = "sproket";
	// this line instantiates a new strong widget
	factory = StrongWidget(widget);
	
	console.log('factory is', typeof factory);
	console.log('...a StrongWidget?', factory instanceof StrongWidget);  
	console.log('widget has not been reassigned:', widget);
	
})();
