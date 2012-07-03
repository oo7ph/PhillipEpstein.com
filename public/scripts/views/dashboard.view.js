App.View.Dashboard = Backbone.View.extend({
	
	initialize: function(){
	
	},
	
	build: function(){
		return ['fragment', [
			['.nav',[
				['ol',[
					['li', 'test']
				]]
			]],
			['.main-content',[
				new App.View.Intro().bind('done', function(){
					$('.main-content', this.el).animate({
						width: '500px'
					},0);
					
					$('.nav', this.el).show().animate({
						width: '200px',	
						'border-left-width': '50px',
						display: 'inline'
					},100)					
				}, this),
							
			]]
		]]
	},
});