/*
 * Concept: Basic Captures
 * 
 * A sample URL router, i.e. a sample purpose of using the result of a capture as a dispatcher.
 * 
 */

(function() {

	// a sample app-like structure to handle routes
	var routes = {
		
		"app" : function() { 
			console.log('looking for the app'); 
		},

		"bar" : function(id) { 
			if (id) {
				console.log('looking for a bar with an id of ' + id);
			} else {
				console.log('looking for all bars');
			}
		}
	}

	var url_processor = /\/(\w+)(\/(\w+))?/;

	function dispatch_path(relative_url) {

		var route_parts = relative_url.match(url_processor);
		var route = route_parts[1];

		// if we have something registered for this route, dispatch it
		if (typeof routes[route] == "function") {
			var args = null;
			if (route_parts[2] != undefined) {
				args = route_parts[3];
			}
			routes[route]( args );
		}

	}

	dispatch_path("/app");
	dispatch_path("/bar");
	dispatch_path("/bar/1");

})();