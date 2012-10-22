/*
 * Concept: Function decompilation
 * 
 */

(function() {

	// find out as much information as you can about a given function `fn` without using the Function class
	function inspector(fn) {
		if (typeof fn === "function") {
			

			var source = fn.toString();	

			// discover the parts of a function signature
				// does it start with `function`
				// is there a space?
				// is this function a named function?
				// are there any arguments?
			var funx_regex = /^(function)(\W)?([\w\u0080-\uFFFF_]+)?\((.+)?\)/;
			var parts = source.match(funx_regex);
			

			// process and report 
			
			var name = (parts[3] != undefined) ? parts[3] : "";
			console.log("\nfunction" + (( name == "" ) ? " is anonymous" : (" name is " + name)) );

			console.dir(parts);

			var args = (parts[4] !== undefined) ? parts[4].split(",") : [];
			console.log("\ttakes", args.length, "arguments: ", args.join(", "));
			

			// print out the internals
			console.log('\tfunction body: \n' + source);
		}
	}


	function named_function(foo, bar) {
		/* comments are sent along with a function */
	}

	inspector(named_function);

	inspector(function(a, b){ return a + b; });

	inspector(function() { });

})();

