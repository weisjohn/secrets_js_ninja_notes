/*
 * Concept: CSS styles
 * 
 */

(function() {

	var non_pixel_value_types = {};
	for (var i=0, l = "zIndex,fontWeight,opacity,zoom,lineHeight".split(','); i < l.length; i++) {
		non_pixel_value_types[l[i]] = true;
	}

	window.style = function(element, name, value) {

	    name = name.replace(/-([a-z])/ig, function (all, letter) {
	        return letter.toUpperCase();
	    });
	    if (typeof value !== 'undefined') {

	    	// isNaN tests if the string has any characters that aren't digits...
	    	if (!isNaN(value)){
	    		if (!non_pixel_value_types[name]) {
	    			value = parseInt(value) + "px";
	    		}
	    	}

	        element.style[name] = value;
	    }
	    return element.style[name];
	}

	// main header in the document
	var h1 = document.getElementsByTagName('h1')[0];

	assert(style(h1, 'margin-top') == "40px", 'h1 has a 40px margin at the top');
	

	var test_element = document.createElement('div');
	test_element.appendChild( document.createTextNode('make money on the float') );
	document.body.insertBefore(test_element);

	style(test_element, 'float', 'left');
	assert(style(test_element, 'float') == "left", 'test div has float:left;');

	assert(style(test_element, 'font-size', '12') == "12px", 'test div font-size:12px;');
	
	assert(style(test_element, 'font-size', '12em') == "12em", 'test div font-size:12em;');

	assert(style(test_element, 'z-index', '100') == "100", 'test div z-index:100;');

	document.body.removeChild(test_element);

})();