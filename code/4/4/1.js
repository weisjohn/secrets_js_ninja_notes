/*
 * Concept: Memo-izing
 *
 *		this is an example of modifying a function after it has been defined, maybe by someone else
 * 		
 */
(function(){

	function bench(iterations, test) {
		if (typeof test == "function") {
			var start = Date.now();
			console.log('start: ' + start);
			for (var i = 0; i < iterations; i++) {
				test();
			}
			var end = Date.now();
			console.log('end: ' + end);
			console.log(iterations + ' iterations took ' + (end-start) + 'ms');
		}
	}

    Function.prototype.memoize = function() {
    	var self = this, cache = {};
        return function(arg) {
        	return (arg in cache) ? cache[arg] : cache[arg] = self(arg);
        }
    };
		
	
    function isPrime(num) {
        var prime = num != 1;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }
    var memoizedPrime = isPrime.memoize();

    console.log('benching isPrime');
    bench(10000000, function() {
    	isPrime(17);
    });

    console.log('benching memoizedPrime');
    bench(10000000, function() {
    	memoizedPrime(17);
    });

    
})();
