/*
 * Concept: Back References
 * 
 * Allow you to grab a reference to the string matching earlier.
 * This shows a sample of what it would be like to write a simple modified Markdown syntax.
 * 
 */

(function() {
	
	// group anything that's matching either a `*` or a `_` and then capture any characters. 
	var styled_word_regex  = /([*_])(.+)(\1)/;

	var markdown_sources = [
		"Hello *this is bold text*!",
		"When you want to say something _suggestive_.",
		"Transformer doens't mess up regular sentences."
	];
	var html_results = [];

	// yeah, these are HTML4, so what?
	// an object map of markdown stylers to html tags
	var down_tag = {
		"*" : "b",
		"_" : "i"
	};

	console.log('markdown sources:');
	for (var i = 0, len = markdown_sources.length; i < len; i++) {
		console.log(markdown_sources[i]);
		html_results.push( 
			markdown_sources[i].replace(styled_word_regex, function(match, p1, p2, p3){
				return ("<" + down_tag[p1] + ">" + p2 + "</" + down_tag[p3] + ">");
			})
		);
	}

	console.log('transformed into html:');
	for (var i = 0, len = html_results.length; i < len; i++) {
		console.log(html_results[i]);
	}

})();