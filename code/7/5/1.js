/*
 * Concept: Using `.replace()` with /g regexes as control flow
 * 
 * 
 * 
 */

(function() {


	
	var sources = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula hendrerit rhoncus. Morbi placerat rutrum tellus, in interdum urna tincidunt in. Cras sem elit, aliquet at iaculis id, ultrices nec orci. Pellentesque pretium volutpat tristique. Praesent ut porta elit. Maecenas consectetur arcu ut eros accumsan varius. Morbi ligula sapien, vulputate eget lacinia sit amet, cursus ut nisl. Sed volutpat vulputate risus, in laoreet justo ornare vel. Maecenas aliquam feugiat congue. Integer enim augue, sagittis consequat scelerisque eu, dapibus ac odio. Aliquam pellentesque nunc nec orci viverra vel congue lacus lacinia. Sed aliquet libero id mi condimentum suscipit. Sed eu turpis nibh, non pretium massa",
		"Sed tempus, leo ac gravida placerat, sem lacus placerat ipsum, nec rhoncus lacus lectus non tellus. Maecenas vehicula sapien sed elit congue gravida. Ut vel justo mauris, sed volutpat lectus. Duis rutrum elementum ligula, vitae molestie arcu elementum et. Maecenas et magna justo. Ut vel nisl vitae turpis lobortis dignissim eget ut turpis. Aenean nec sem erat, in lacinia ligula.",
	];

	function find_and_highlight(search, source) {

		var search_ex = new RegExp( "(" + search + ")" , "ig");
		var instances = 0;
		var highlighted = source.replace(search_ex, function(word) {
			instances++;
			return "*" + word + "*";
		});

		return {
			"text" : highlighted,
			"search" : search,
			"instances" : instances
		}
	}

	for (var i = 0; i < sources.length; i++) {
		var results = find_and_highlight( 'sed' , sources[i] );
		console.log("%s was found %d times in \n \t%s \n", 
			results.search, results.instances, results.text);
	};

	for (var i = 0; i < sources.length; i++) {
		var results = find_and_highlight( 'at' , sources[i] );
		console.log("%s was found %d times in \n \t%s \n", 
			results.search, results.instances, results.text);
	};

})();