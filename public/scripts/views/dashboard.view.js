App.View.Dashboard = Backbone.View.extend({
	
	initialize: function(){
	
	},
	
	build: function(){
		return ['fragment', [
			['.nav',[
				['ol',[
					['li.current', 'my self'],
					['li', 'folio'],
					['li', 'reach me']
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
					},100);
					$('.myself', this.el).show();
					$('.button-section', this.el).show();	
								
				}, this),
				['.myself',[
					['p.intro','I am a business man, based in boulder colorado, I specialize in ecommerce and technology operations.'],
					['p', 'Bacon ipsum dolor sit amet turkey sausage venison chicken frankfurter. Sausage capicola leberkas shank sirloin beef ribs tail, swine tri-tip shankle boudin ground round. Jowl kielbasa short loin, cow tri-tip shankle pancetta turducken ground round meatball rump salami capicola. Short ribs meatloaf boudin tenderloin pancetta andouille, ball tip tri-tip hamburger sausage. '],
					['.button-section',[
						['a.portfolio.button', 'view my portfolio'],
						['a.resume.button', 'download my resume'],
					]]	
				]],
					
			]]
		]]
	},
});