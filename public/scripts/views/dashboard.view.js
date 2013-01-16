App.View.Dashboard = Backbone.View.extend({
	
	initialize: function(){
		this.introView = new App.View.Intro({
			id: 'intro'
		});
	},
	
	build: function(){
		var that = this;
		
		return ['.main',{ render: function(){
			// var pageInception = new inception();
// 	
			// pageInception.$content = $('.main');
		 	// pageInception.$nav = $('#nav');
		
		  	// var $body = $('body'), iOSclass = isIOS ? 'ios' : 'no-ios';
// 		
		  	// $body.addClass( iOSclass );
		
			// if ( Modernizr.csstransforms ) {
				// $('.page-nav').each(function(){
					// this.addEventListener( 'click', pageInception, false );
				// });
			  // }
		}},[
			this.introView.bind('done', function(){
				$('.dark-tower', that.el).toggle();
			}),
			['section.dark-tower',{ id:'darkTower' }, [
				['section.hugo-stiglitz']
			]]
		]]
	},
});