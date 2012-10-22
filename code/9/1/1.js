/*
 * Concept: Run-Time Code Evaluation
 * 
 * two aspects of eval():
 * 	- it will evaluate the code passed to it as a string
 *  - it will execute that code in the scope in which eval() is called
 */

(function() {

	// any `code` passed in is `eval()`ed
	// if `assertion` is a function, invoke and test 
	// if `assertion` is a string, it will be `eval()`ed as well and tested
	// if `assertion` is a value, the result of the `code` that was `eval()`ed will be compared
	function eval_and_assert(code, assertion) {

		// try to eval the code, catch errors
		try {
			// what was *returned* from our `eval()`
			var returned = code !== undefined ? eval(code) : eval();	
		} catch (e) {
			console.error(e);
		}
		
		// the result of our assertion test
		var result;
		if (typeof assertion === "function") {
			result = assertion();
		} else if (typeof assertion === "string") {
			result = eval(assertion);
		} else {
			result = (returned === assertion);
		}

		console.log(
			'eval(' + code + ') ==', assertion , 
			"\n" + returned , ":",  (!!result ? "success" : "failure") );

		return returned;
	}

	// eval returns values
	eval_and_assert("2 + 2", 5);

	// eval creates functions
	eval_and_assert("function foo() { return '42'; }", "(function() { return foo() == 42; })()");

	// eval creates objects
	eval_and_assert("var a = { 'b' : 2 };", "(function() { return typeof a !== \"undefined\" })()");

	// eval fails on invalid syntax 
	eval_and_assert("var c = { 'a' : '1' ;", "(function() { return typeof c === \"undefined\" })()");

	// and it doesn't complete any of the code 
	eval_and_assert("var d = { 'foo' : 'bar' }; var e = { 'a' : '1' ;", "(function() { return (typeof d === \"undefined\") && typeof e === \"undefined\" })()");

	// and it doesn't poison scope
	eval_and_assert("window.d = { 'foo' : 'd' }; ", "(function() { return (typeof d === \"undefined\") && (typeof window.d !== \"undefined\"); })");


	// eval() can be used to create an annonymous function
	var fn = eval('(function() { return "42"; })');
	console.log('typeof fn === "function":', typeof fn === "function");



})();

