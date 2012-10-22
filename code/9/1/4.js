/*
 * Concept: Global Scope through a script tag
 * 
 * shamelessly stolen from the book : http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
 * 
 * adapted from Listing 9.3
 */

(function() {

	function globalEval(data) { 
		// trim whitespace
		data = data.replace(/^\s*|\s*$/g, "");
		if (data) {
			// find head or document
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script"); 

			// .type is unnecessary?
			script.type = "text/javascript"; 
			script.text = data;
         	
         	// attach and remove 
         	head.appendChild(script);
         	head.removeChild(script);
     	} 
 	} 

 	(function() { 
 		globalEval("var a = '42'");
 	})();

 	console.log("typeof window.a !== 'undefined'", typeof window.a !== 'undefined');

})();

