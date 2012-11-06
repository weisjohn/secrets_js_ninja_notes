/*
 * Concept: Injecting HTML into the DOM
 *
 */

 (function() {

	// 2. Injecting that DOM structure into any location in the DOM as efficiently as possible. 
	// 3. Executing any inline scripts that were in the source string.

	// 1. Converting an arbitrary but valid HTML/XHTML string into a DOM structure.

	// pre-process any HTML source
	var tags = /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i;
	function convert(html) {
		return html.replace(/(<(\w+)[^>]*?)\/>/g, function (all, front, tag) {
			return tags.test(tag) ? all : front + "></" + tag + ">";
		});
	}

	assert(convert("<a/>") === "<a></a>", "Check anchor conversion.");
	assert(convert("<hr/>") === "<hr/>", "Check hr isn't converted conversion.");

	

 })();