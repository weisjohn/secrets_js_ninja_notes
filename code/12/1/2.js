/*
 * Concept: Dealing with <form>s that have odd attributes 
 * 
 */

	var translations = {
		"for": "htmlFor",
		"class": "className",
		readonly: "readOnly",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		rowspan: "rowSpan",
		colspan: "colSpan",
		tabindex: "tabIndex",
		cellpadding: "cellPadding",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	};

	window.attr = function (element, name, value) {
	    var property = translations[name] || name,
	    propertyExists = typeof element[property] !== "undefined";
	    if (typeof value !== "undefined") {
	        if (propertyExists) {
	            element[property] = value;
	        } else {
	            element.setAttribute(name, value);
	        }
	    }

	    console.log('propertyExists', propertyExists);

	    return !propertyExists ? 
	    	element.getAttribute('name') :
	    	!!element.getAttributeNode ?
	    		element.getAttributeNode(name).value : 
	    		element[property];
	};

	// the second form in runner.html
	var sample_form = document.forms[1];

	// attr returns what the node has
	assert(attr(sample_form, 'action') == '#bar', 'setAttribute("action") == "#bar"');

	// awesomeness
	document.body.removeChild(sample_form);

