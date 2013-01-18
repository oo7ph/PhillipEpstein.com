App.View.Dashboard = Backbone.View.extend({
	
	className: 'main',
	
	initialize: function(){
		this.introView = new App.View.Intro();
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
						inception.init(content, 0, 2);
					} },[
						['section.intro',[
							this.introView.bind('done', function(){
								$('.dark-tower', that.el).toggle();
							}),
							['test0']
						]],
						['section.who-is',[
							['.dark-tower',[
								['.hugo-stiglitz'],
								['.tv'],
							]]
						]],
						['section.test1',[
							['.test1']
						]],
						['section.test2',[
							['.test2']
						]],
					]],
				]]
			]],
			['.scroller']
		]];
	},
});