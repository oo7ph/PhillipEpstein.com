App.View.Dashboard = Backbone.View.extend({
	
	initialize: function(){
		this.introView = new App.View.Intro();
	},
	
	build: function(){
		return ['fragment', [
			this.introView,
		]]
	},
});