App.View.Dashboard = Backbone.View.extend({
	
	initialize: function(){
		this.introView = new App.View.Intro();
	},
	
	build: function(){
		var that = this;
		
		return ['.wrap',[
			['.container', [
				['ul.nav',[
					//['li a', { href:'#intro' }, 'Phillip Epstein'],
					//['li a', { href:'#who-is' }, 'Who Is He?'],
				]],
				['.content',[
					['section.intro',[
						this.introView.bind('done', function(){
							$('.dark-tower', that.el).toggle();
						}),
						['test0']
					]],
					['section.who-is',[
						['.dark-tower .hugo-stiglitz']
					]],
					['section.test1',[
						['.test1']
					]],
					['section.test2',[
						['.test2']
					]],
				]],
			]]
		]];
	},
});