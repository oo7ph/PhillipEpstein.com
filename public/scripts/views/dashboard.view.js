App.View.Dashboard = Backbone.View.extend({
	
	initialize: function(){
		this.introView = new App.View.Intro();
	},
	
	build: function(){
		var that = this;
		return ['.main', [
			this.introView.bind('done', function(){
				$('.dark-tower', that.el).toggle();
			}),
			['section.dark-tower',[
				['section.hugo-stiglitz']
			]]
		]]
	},
});