/*
 * Concept: Function decompilation
 * 
 */

(function() {

	// find out as much information as you can about a given function `fn` without using the Function class
	function inspect(fn) {
		if (typeof fn === "function") {
			

			var source = fn.toString();	

			// discover the parts of a function signature
				// does it start with `function`
				// is there a space?
				// is this function a named function?
				// are there any arguments?
			var funx_regex = /^function(\W)?([\w\u0080-\uFFFF_]+)?\((.+)?\)/;
			var parts = source.match(funx_regex);
			
			// analyze / report 

			var name = (parts[2] != undefined) ? parts[2] : "";
			console.log("\nfunction" + (( name == "" ) ? " is anonymous" : (" name is " + name)) );

			var args = (parts[3] !== undefined) ? parts[3].split(",") : [];
			console.log("\ttakes", args.length, "arguments: ", args.join(", "));

			// print out the internals
			console.log('\tfunction body: \n\t' + source);

			console.dir(parts);
		}
	}


	function named_function(foo, bar) {
		/* comments are sent along with a function */
	}

	function arg_less() {
		return;
	}

	inspect(named_function);

	inspect(arg_less);

	inspect(function(a, b) { return a + b; });

	inspect(function(a, b, c) { return a * b * c; });

	inspect(function() { });

})();

