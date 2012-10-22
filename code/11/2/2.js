/*
 * Concept: Defensive Coding
 * 
 * Attempt at an `Object.getOwnPropertyNames()` polyfill 
 */

(function() {

	Object.prototype._getOwnPropertyNames = function() {
		var props = [];
		for (var prop in this) {
			if (this.hasOwnProperty(prop)) {
				props.push(prop);
			}
		} 
		return props;
	}

	function Person() {
		this.code = function() {
			return '11001010';
		}
	}
	Person.prototype.talk = function() {
		return "blah";
	}

	var john = new Person();

	var john_props = john._getOwnPropertyNames();
	console.log('john\'s properties count', john_props.length);

})();