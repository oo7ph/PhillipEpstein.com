App.View.Dashboard = Backbone.View.extend({

	events:{
	
	},
	
	initialize: function(){
	
	},
	
	build: function(){
		return ['fragment', [
			new App.View.Intro(),
			['.main-content',[
			
			]]
		]]
	},
});