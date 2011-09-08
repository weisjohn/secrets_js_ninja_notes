/*
 * Best practice: performance analysis
 * 
 * a function with a signature like this was mentioned:
 * 		perf( string_name_of_function, func )
 * 
 * calling something like this:
 * 		
 	perf("String Concatenation", function(){
		var name = "Fred";
		for (var i = 0; i < 20; i++) {
			name += name;
		}
	});
 * 
 * I decided to make a function now, and compare once he gives me his...
 */

(function() {
	

	function perf(name, func) {
		
		var d = new Date(),
			start = d.getMilliseconds(),
			stop = null;
			
		func();
		
		d = new Date();
		stop = d.getMilliseconds();
		
		console.log(name , "took", stop-start , "milliseconds.");	
	}
	
	
	
	perf("String Concatenation", function(){
		var name = "Fred";
		for (var i = 0; i < 10; i++) {
			name += name;
		}
	});
	
	
	
	perf("1000 Random Number Generations", function(){
		var c = 1000,
			num = 0;
		for (var i = 0; i < c; i++){
			num = Math.floor(Math.random()*1000);
		}
	});
	
})();
