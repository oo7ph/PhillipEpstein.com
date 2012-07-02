App.View.Intro = Backbone.View.extend({	
	
	build: function(){
		var that = this;
		return ['.intro', { render: that.renderIntro.bind(this) }];
	},
	
	renderIntro: function (el) {
		var that = this;
		canvasW = (window.innerWidth);
		canvasH = (window.innerHeight);
		r = Raphael(el, canvasW, canvasH);
		cam = r.set();	
		initCamSettings = { transform: 's 1' };
		// var does = r.print(50, 50, "does", r.getFont("Proxima Nova Rg"), 40);
		// var phillip = r.print(50, 50, "Phillip", r.getFont("Proxima Nova Rg"), 40);
		// var epstein = r.print(50, 50, "Epstein", r.getFont("Proxima Nova Rg"), 40);
		// var look = r.print(50, 50, "LOOK", r.getFont("Proxima Nova Rg"), 40);
		// var like = r.print(50, 50, "LIKE?", r.getFont("Proxima Nova Rg"), 40);
		
		var queue = [
		//What
			{
				actor: r.print(200,400, "WHAT", r.getFont("Proxima Nova Rg"), 400)
					.attr({ 'text-anchor':'start', title: 'what', opacity: 0 }),
				pause: 1000
			},
			{
				camera: function(){that.moveCam({y:-150,  z:.5 }, cam)}
				
			},
		//does
			{
				actor: r.print(canvasW/8, canvasH/2, "does", r.getFont("Proxima Nova Rg"), 1000)
					.attr({ 'text-anchor':'start', title: 'does', opacity: 0 }),
					//.attr({ transform: 't -10, 200' }),
				pause: 1000
			},
			{
				camera: function(){that.moveCam({y:-150, z:.5 }, cam)}
				
			},
			
		//Phillip
			{
				actor: r.print(canvasW/8, canvasH/2, "Phillip", r.getFont("Proxima Nova Rg"), 1000 )
					.attr({ 'Set text-anchor':'middle', title: 'phillip', opacity: 0 }),
					//.attr({ transform: 'T -600, 500' }),
				pause: 1000
			},
			
		];
		
		queue.forEach(function(scene){
			if(scene.actor){
				console.log('Loaded: '+scene.actor.attr('title'));
				cam.push(scene.actor);
			}
		});
		var pos = 0;
		var run = function(){
			var pause = queue[pos].pause ? queue[pos].pause : 0;
			if(queue[pos].actor){
				queue[pos].actor.attr({ opacity:1 });
			}
			if(queue[pos].camera){
				queue[pos].camera();
			}
			
			setTimeout(function(){
				pos = ++pos;
				if(queue[pos]){
					run();
				}
			}, pause);	
		};
		
		run();
	},
	
	moveCam: function(args, cam){
		defaults = {
			x: 0,
			y: 0,
			z: 1,
			ms: 100,
		};
		args = _.extend(defaults, args);
		cam.forEach(function(scene){
			var prevTransform = scene.attr('transform').join(', ');
			// var transform = '{3}t, {0}, {1}, s, {2},{2}, {4},{5} '.supplant([args.x, args.y, args.z, prevTransform ? prevTransform + ', ' : '',window.innerWidth/2,window.innerHeight/2]);
			var transform = '{3}t, {0}, {1}, s, {2} '.supplant([args.x, args.y, args.z, prevTransform ? prevTransform + ', ' : '',window.innerWidth/2,window.innerHeight/2]);
			scene.animate(
				{transform: transform},
				args.ms, 
				'<>'
			);
			console.log(scene.attr('title'), 'before: ' + scene.attr('transform').join(', '), 'after: '+ transform);
		})
		
		
	},
});