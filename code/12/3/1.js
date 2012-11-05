/*
 * Concept: CSS styles
 * 
 */

(function() {

	window.style = function(element, name, value) {

	    name = name.replace(/-([a-z])/ig, function (all, letter) {
	        return letter.toUpperCase();
	    });
	    if (typeof value !== 'undefined') {
	        element.style[name] = value;
	    }
	    return element.style[name];
	}

	// main header in the document
	var h1 = document.getElementsByTagName('h1')[0];

	assert(style(h1, 'margin-top') == "40px", 'h1 has a 40px margin at the top');

})();