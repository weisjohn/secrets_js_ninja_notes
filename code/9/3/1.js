/*
 * Concept: Custom Script Tag Types
 * 
 */

(function() {

	// find and locate any templates in the document
	var templates = document.getElementsByTagName("script");
	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].type == "x/custom-template") {

			var tpl = $(scripts[i].innerHTML());
			console.log(tpl);
		}
	};


})();

