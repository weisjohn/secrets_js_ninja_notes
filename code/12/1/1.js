/*
 * Concept: Attribute vs. Property speed tests
 * 
 */

(function() {
	
	var test_element = document.createElement('div');
	test_element.setAttribute('id', 'foo');
	test_element.appendChild( document.createTextNode('hello world') );
	document.body.insertBefore(test_element);

	var value;

	bench(10000000, function() {
		value = test_element.getAttribute('id');
	}, "getAttribute()");

	bench(10000000, function() {
		value = test_element.id;
	}, "access property");

	bench(1000000, function() {
		test_element.setAttribute("id", value);
	}, "setAttribute()");

	bench(1000000, function() {
		test_element.id = value;
	}, "set property");
	
	// awesomeness
	document.body.removeChild(test_element);
})();