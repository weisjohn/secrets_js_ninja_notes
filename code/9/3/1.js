/*
 * Concept: Custom Script Tag Types
 * 
 */

(function() {

	// find and locate any templates in the document
	var templates = document.getElementsByTagName("script");
	for (var i = 0; i < templates.length; i++) {
		if (templates[i].type == "x/custom-template") {

			var tpl = $(templates[i].innerHTML);
			console.log(tpl);
		}
	};


})();

