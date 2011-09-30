/*
 * Concept: Class-like inheritance hierarchies
 * 
 * this is a library that allows simple class-like inhertiance
 */

(function() {

	

	var initializing = false,
	// Determine if functions can be serialized
    fnTest = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;
	
	
	// Create a new Class that inherits from this class
	Object.subClass = function(prop){
		
		
		// Create a new Class that inherits
		var _super = this.prototype;
		
		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var proto = new this();
		initializing = false;
		
		// Copy the properties over onto the new prototype
		for (var name in prop) {
			
			// here's the money code...
			
			// Check if we're overwriting an existing function
			proto[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn){
				return function(){
					
					// all of this code in the internal function gets executed every single run of the function
					// console.log('running'); // uncomment this line to verify
					
					// store a copy of the function					
					var tmp = this._super;
					
					// Add a new ._super() member (to our local executing function, not class) that is the same method but on the super-class
					this._super = _super[name];

					// The method only need to be bound temporarily, so we remove it when we're done executing					
					var ret = fn.apply(this, arguments);
					
					// reset the value after the function executes
					this._super = tmp;
					
					return ret;
				};
			})(name, prop[name]) : prop[name]; // otherwise simply copy over the function / value
		}
		// The dummy class constructor
		
		function Class(){
			// All construction is actually done in the init method
			if (!initializing && this.init) 
				this.init.apply(this, arguments);
		}
		
		// Populate our constructed prototype object
		Class.prototype = proto;
		
		// Enforce the constructor to be what we expect
		Class.constructor = Class;
		
		// And make this class extendable
		Class.subClass = arguments.callee;
		return Class;
		
	};

	
	


	// we can then use said system...
	
	var Instrument = Object.subClass({
		init: function(v) {
			this.volume = v;
		},
		play: function(note) {
			// console.log('base instrument play');
			console.log((this.volume < 90) ? 'playing' : "PLAYING" , note);
		}
	});
	
	

	// note: no init function redefined
	var StringInstrument = Instrument.subClass({
		play: function(note) {
			// console.log('string instrument play');
			this._super(note);
		},
		pluck: function(string) {
			this.play(string);
		}
	});

	
	// note: no play method redefined
	var Guitar = StringInstrument.subClass({
		pluck: function(string) {
			this.volume = 50;
			this._super(string);
		},
		strum: function(chord) {
			this.volume = 100;
			this.play(chord)
		}
	});
	
	var Piano = StringInstrument.subClass({
		pluck: function(string) {
			this.volume = 50;
			this.play(string);
		},
		chord: function(chord) {
			this.volume = 60;
			this.play(chord);
		}
	});

	
	// play some songs!
	
	var gibson = new Guitar(65);
	gibson.pluck("e string");
	gibson.pluck("B string");
	gibson.pluck("G string");
	gibson.strum("G Maj 7");
	
	console.log('running');
	
	var baldwin = new Piano(50);
	baldwin.pluck('middle c');
	baldwin.pluck('middle d');
	baldwin.chord("C Maj");
	baldwin.chord("E Minor");

})();
