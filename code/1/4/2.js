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
		
		var start = Date.now(), stop = null;
			
		func();
		
		stop = Date.now();
		
		console.log(name , "took", stop-start , "milliseconds.");	
	}
	
	
	
	perf("1000000 String Concatenations", function(){
		var name = "";
		for (var i = 0; i < 1000000; i++) {
			name += "."
		}
	});
	
	
	
	perf("1000000 Random Number Generations", function(){
		var c = 1000000,
			num = 0;
		for (var i = 0; i < c; i++){
			num = Math.floor(Math.random()*1000);
		}
	});
	
})();
