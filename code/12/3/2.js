/*
 * Concept: HSL to RGB conversion
 * 
 */

(function() {

	var rgb_regex = /rgb\((.+)\)/;

	window.getHSLColor = function(element, property) {
		
		if (!element) return;	// leave quickly

		var color = element.style[property],
			rgb = [],
			hsl;

		// detect if the color is of the form `rbg(x,y,z)`
		if (rgb_regex.test(color)) {

			// make into rgb array
			color.match(rgb_regex)[1].split(',').forEach(function(elem, i) { 
				rgb[i] = parseInt(elem);
			}); 

			console.dir(rgb);

			// make the formulas easy to read
			var red 	= rgb[0], 
				green 	= rgb[1], 
				blue 	= rgb[2];

			// convert it to HSL 
			// http://en.wikipedia.org/wiki/HSL_and_HSV#General_approach

			// chroma is the difference of the Max(rgb) - Min(rgb)
			var max = Math.max.apply(null, rgb);
			var min = Math.min.apply(null, rgb);

			var hue, saturation, lightness = (max + min) / 2;

			if (max == min) {
				hue = saturation = 0;
			} else {
				var delta = max - min;
				saturation = (lightness > 0.5) ? delta / (2 - max - min) : d / (max + min);

				switch (max) {
					case red : 
						hue = (green - blue) / d + ( green < blue ? 6 : 0 ); 
						break;
					case green :
						hue = (blue - red) / d + 2;
						break;
					case blue : 
						hue = (red - green) / d + 4; 
						break;
				}
				hue = hue / 6;
			}

			return {
				"hue" : hue,
				"saturation" : saturation,
				"lightness" : lightness
			};

		}

	}

	// main header in the document, has a hex #333333 for color
	var h1 = document.getElementsByTagName('h1')[0];
	var h1_hsl = getHSLColor(h1, 'color');

	assert(h1_hsl['hue'] == '0', 'hue is 0°s');
	assert(h1_hsl['saturation'] == '0', 'saturation is 0');
	assert(h1_hsl['lightness'] == '51', 'lightness is 0');


})();