/*
 * Concept: 
 * 
 * small timeframes are just not realistic...
 * 
 * Secrets JS Ninja learning part 6.1.2
 * jpw
 */

(function() {

	console.log('run 6.2.1');

	// variables to minimize re-init waste
	var first = (new Date).getTime(),
		last,
		start = (new Date).getTime(),
		stop,
		sum = 0,
		sum_squares = 0,
		avg,
		std_dev,
		variance,
		min = Number.POSITIVE_INFINITY,
		max = Number.NEGATIVE_INFINITY,
		times = [];
	
	window.times = times;
	
	
	// runs as fast as it can
	var t1 = setInterval(function() {
		// grab the time that we've executed
		stop = (new Date).getTime();
		
		// record deltas
		times.push(stop-start);
		
		// record the time that we 
		start = (new Date).getTime();
	}, 1);
	
	
	
	// after running for a sec, do some reporting
	setTimeout(function() {
		
		// note the time
		last = stop;
		// stop the execution of the interval 
		clearInterval(t1);
		
		
		// calculate the avg_spd
		sum = 0;
		for (var i = 0; i < times.length; i++){
			sum += times[i];
		}
		avg = sum / times.length;
		
		// calculate the std_dev
		sum = 0;
		for (var i = 0; i < times.length; i++) {
			sum += times[i];
			// sum the square of the value
			sum_squares += times[i] * times[i];
		}
		
		// variance is the sum of the squares 
			// minus the sum squared / n all over n
		variance = (sum_squares - ((sum * sum)/times.length) ) / times.length;
		std_dev = Math.sqrt(variance);
		
		// calculate the min
		for (var i = 0; i < times.length; i++){
			if (times[i] < min) {
				min = times[i];
			}
		}
		
		
		// calculate the max
		for (var i = 0; i < times.length; i++){
			if (times[i] > max) {
				max = times[i];
			}
		}
		
		
		// report
		console.log('runs:', times.length);
		console.log('first:', first);
		console.log('last :', last);
		console.log('variance:', variance);
		console.log('standard deviation:', std_dev);
		console.log('average speed:', avg);
		console.log('minimum speed:', min);
		console.log('maximum speed:', max);
		
	}, 1000);

})();
