App.View.Dashboard = Backbone.View.extend({
	
	className: 'main',
	
	initialize: function(){
		this.introView = new App.View.Intro({
			className: 'intro-text'
		});
	},
	
	build: function(){
		var that = this;
		
		return ['fragment', [
			['.wrap .background', [
				['.container', [
					['ul.nav',[
						//['li a', { href:'#intro' }, 'Phillip Epstein'],
						//['li a', { href:'#who-is' }, 'Who Is He?'],
					]],
					['.content', { render: function(content){
						inception.init(content, 0, 7);
					} },[
						['section.intro',[
							this.introView.bind('done', function(){
								$('.dark-tower', that.el).toggle();
								$('.who-is', that.el).toggle();
								$('.tech', that.el).toggle();
							}),
							['.dark-tower']
						]],
						['section.who-is',[
							['.hugo-stiglitz'],
							['.tv'],
						]],
						['section.tech'],
						['section.ecommerce'],
					]],
				]]
			]],
			['.scroller']
		]];
	},
});