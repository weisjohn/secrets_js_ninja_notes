/*
 * Concept: Types of Regex Matching
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

	function test_pntdrrn_regex(pattern, sample, dividend, divisor) {
		console.log( 
			dividend + "/" + divisor + "\t" +
			pattern.toString() +
			( pattern.test(sample) ? "" : " doesn't" ) + " match" + 
			( pattern.test(sample) ? "es " : " " ) + 
			"`" + sample + "`"
		);
	}

	function find_matches(pattern, sample) {
		if (typeof sample == "string") {
			console.log( 
				pattern.toString() +
				( pattern.test(sample) ? "" : " doesn't" ) + " match" + 
				( pattern.test(sample) ? "es " : " " ) + 
				"`" + sample + "`" + 
				( pattern.test(sample) ? (" on " + JSON.stringify( sample.match(pattern) ) ) : "" ) 
			);
		}
	}

	var regex_literal = /test/;
	var regex_constructor = new RegExp("test");
	
	test_regex(regex_literal, "test" );
	test_regex(regex_constructor, "test" );


	var class_regex = /[abc]/;

	test_regex(class_regex, "abc");
	test_regex(class_regex, "def");


	var range_regex = /[a-z]/;

	test_regex(range_regex, "abc");
	test_regex(range_regex, "123");


	var escaping_regex = /\^/;

	test_regex(escaping_regex, "caret symbol");
	test_regex(escaping_regex, "^");

	// sometimes, you write a regex that you think is correct, however...
	var faulty_http_regex = /http\:\/\//;

	test_regex(faulty_http_regex, "http://www.google.com/");
	test_regex(faulty_http_regex, "ftp://johnweis.com/");
	test_regex(faulty_http_regex, "spoofhttp://www.google.com/");

	// you need to revise it
	var http_start =  /^http\:\/\//;

	test_regex(http_start, "http://www.google.com/");
	test_regex(http_start, "spoofhttp://www.google.com/");


	// somewhat flexible, not very useful
	// ? makes the preceeding character optional
	// $ means if it is matching at the end
	var com_ending = /\.com.?$/;

	test_regex(com_ending, "http://www.google.com/");
	test_regex(com_ending, "http://www.google.com");


	var transfer_protocol = /.{0,2}tp\:\/\//;

	test_regex(transfer_protocol, "http://www.google.com/");
	test_regex(transfer_protocol, "ftp://johnweis.com/");
	test_regex(transfer_protocol, "git://johnweis.com/");
	test_regex(transfer_protocol, "_tp://johnweis.com/");

	// Pseudo Non-Terminating Decimal Represenation of a Rational Number
	var pntdrrn = /\d{3,}/;

	for (var i = 1; i < 10; i++) {
		for (var j = 1; j <= i-1; j++) {
			test_pntdrrn_regex(pntdrrn, (j/i) + "", j, i);	
		}
	}

	var unicode_plane = /[\x2708]/;

	test_regex(unicode_plane, "I'm a ✈ setter");


	// now we're learning about grouping!
	// `|` provies alternation, logical OR 
	var pretty_good_TLD = /\.(com|net|org|edu|info|name|xxx|us|me|uk|coop|name).*$/;

	find_matches(pretty_good_TLD, "http://johnweis.com/");
	find_matches(pretty_good_TLD, "http://neumont.edu/");
	find_matches(pretty_good_TLD, "http://informationarchitects.net/");
	find_matches(pretty_good_TLD, "http://example.notaglobaltld/");

	
	// Back References 
	var tag_finder = /<(\w+)>(.+)<\/\1>/;

	find_matches(tag_finder, "<p> a paragraph </p>");
	find_matches(tag_finder, "<b> bold italics? </i>");
	find_matches(tag_finder, "<b> <i>bold and italic</i> </b>");

	console.log('');


	String.prototype.repeat = function (num) {
	  var a = [];
	  a.length = parseInt(num, 10) + 1;
	  return a.join(this);
	};


	// a very weak HTML parser that only handles snippets
	function faux_parse_HTML(html, depth) {

		!!depth || (depth = 0); 

		if (depth == 0) {
			console.log('Source: ' + html + "\nElements to create:");
		}

		var matches = html.match(tag_finder);

		if (matches != null && matches.length >= 2) {

			console.log(
				"\t".repeat(depth) + matches[1].toUpperCase()
			)
			
			faux_parse_HTML(matches[2], ++depth);
		} 
	}


	faux_parse_HTML("<div> <p> foo <strong> text </strong> </p> </div>");


})();

