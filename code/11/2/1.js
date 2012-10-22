/*
 * Concept: Defensive Coding
 * 
 * The `in` keyword doesn't inspect the prototype chain, it just looks to see if that member exists, somehow
 * .hasOwnProperty inspects the prototype chain to see if that 
 */

(function() {

	Object.prototype.walk = function() {
		return ">>>>";
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


	console.log("'code' in john", 'code' in john);
	console.log("john.hasOwnProperty('code')", john.hasOwnProperty('code'));
	console.log('john.code();', john.code());

	console.log("'walk' in john", 'walk' in john);
	console.log("john.hasOwnProperty('walk')", john.hasOwnProperty('walk')); // returns false, because `walk` is on Object
	console.log('john.walk();', john.walk());

	console.log("'talk' in john", 'talk' in john);
	console.log("john.hasOwnProperty('talk')", john.hasOwnProperty('talk')); // returns false, because `talk` is on the Person prototype
	console.log('john.talk();', john.talk());

})();