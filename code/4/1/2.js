/*
 * Concept: Private JS variables through closures
 * 
 * I got this code from Douglas Crockford: http://javascript.crockford.com/private.html
 * 
 */

(function() {

	function Container(param) {
	
	    this.member = param;
	    var secret = 2;
	    var that = this;
		
		this.guess = function(s) {
			return (secret == s);
		}
		
	}
	
	var c = new Container('abc');
	
	console.log('member is visible', c.member);
	console.log('secret is private (undefined)', typeof c.secret);
	console.log('is the secret 1', c.guess(1));
	console.log('is the secret 2', c.guess(2));
	console.log('is the secret 3', c.guess(3));
	
})();
