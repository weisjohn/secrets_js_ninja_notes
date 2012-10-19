/*
 * Concept: matching all characters, including unicode
 * 
 * 
 * 
 */

(function() {

	function test_regex(pattern, sample) {
		console.log( 
			pattern.toString() +
			( pattern.test(sample) ? "" : " doesn't" ) + " match" + 
			( pattern.test(sample) ? "es " : " " ) + 
			"`" + sample + "`"
		);
	}

	// any letter or digit, an unicode above 80
	// see [http://en.wikipedia.org/wiki/List_of_Unicode_characters] for more help
	var match_all = /[\w\u0080-\uFFFF_-]+/;

	var chars = "1,ab,_,.,$,foo,class,\u03C0".split(",");

	for (var i = 0; i < chars.length; i++) {
		test_regex(match_all, chars[i]);
	};

})();