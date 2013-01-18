var inception = {
	
	init: function(content, scrolled, levels){
		this.content = content;
		this.scrolled = scrolled;
		this.levels	= levels;
		this.docHeight = document.documentElement.offsetHeight;
		
		window.addEventListener( 'scroll', this, false);
	},
	
	handleEvent: function( event ) {
		if ( this[event.type] ) {
			this[event.type](event);
		}
	},
	
	scroll: function( event ) {
		// normalize scroll value from 0 to 1
		this.scrolled = window.scrollY / ( this.docHeight - window.innerHeight );
		
		var scale = Math.pow( 3, this.scrolled * this.levels );
		var transformValue = 'scale('+scale+')';		
		
		this.content.style.WebkitTransform = transformValue;
		this.content.style.MozTransform = transformValue;
		this.content.style.OTransform = transformValue;
		this.content.style.transform = transformValue;
	},
	
}