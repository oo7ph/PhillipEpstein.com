App.View.Intro = Backbone.View.extend({	
	
	initialize: function(){
		this.whatDoesSound = new buzz.sound('/assets/WhatDoes.mp3');
	},
	
	build: function(){
		var that = this;
		return ['fragment.intro', { render: that.renderIntro.bind(this) }];
	},
	
	renderIntro: function (el) {
		var that = this;
		canvasW = (window.innerWidth);
		canvasH = (window.innerHeight);
		r = Raphael(el, canvasW, canvasH);
		cam = r.set();	
		initCamSettings = { transform: 's 1' };

		var queue = [
		//What
			{
				actor: r.print(canvasW/8,canvasH/2, "WHAT", r.getFont("Proxima Nova Rg"), .35 * canvasH )
					.attr({ 'text-anchor':'start', title: 'what', opacity: 0 }),
				pause: 200
			},
			{
				camera: function(){that.moveCam({y:-canvasH*.513,  z:.5 }, cam)}
				
			},
		//does
			{
				actor: r.print(-canvasH * .410, canvasH * .873, "does", r.getFont("Proxima Nova Rg"), canvasH)
					.attr({ 'text-anchor':'start', title: 'does', opacity: 0 }),
					//.attr({ transform: 't -10, 200' }),
				pause: 200
			},
			 {
				 camera: function(){that.moveCam({ x: -canvasW*2.735, z:.12 }, cam)}
 				
			 },
			
		  //Phillip
			 {
				 actor: r.print(canvasH * 2.053, canvasH * .873, "Phillip", r.getFont("Proxima Nova Rg"), canvasH )
					 .attr({ 'Set text-anchor':'middle', title: 'phillip', opacity: 0 }),
				 pause: 500
			 },
			// Epstein
			 {
				 actor: r.print(canvasH * 5.133, canvasH * .873, "Epstein", r.getFont("Proxima Nova Rg"), canvasH )
					 .attr({ 'Set text-anchor':'middle', title: 'epstein', opacity: 0 }),
				 pause: 1000
			 },
			// LOOK
			 {
				 actor: r.print(canvasH * 5.133, canvasH * 2.053, "LOOK", r.getFont("Proxima Nova Rg"), canvasH )
					 .attr({ 'Set text-anchor':'middle', title: 'look', opacity: 0 }),
				 pause: 500
			 },
			 // LIKE?
			 {
				 actor: r.print(canvasH * 8.213, canvasH * 2.053, "LIKE?", r.getFont("Proxima Nova Rg"), canvasH )
					 .attr({ 'Set text-anchor':'middle', title: 'like', opacity: 0 }),
				 pause: 1000
			 },
			 {
				 camera: function(){
					 that.moveCam({ scaleX:40, scaleY:25, z:.06 }, cam);
					 that.trigger('done');
					 $('svg', that.el).animate({
					 	height: canvasH *.24,
					 })
				 }
 				
			 },
 			
		];
		
		queue.forEach(function(scene){
			if(scene.actor){
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
		this.whatDoesSound.play();
		run();
	},
	
	moveCam: function(args, cam){
		defaults = {
			x: 0,
			y: 0,
			z: 1,
			ms: 100,
			scaleX: window.innerWidth/2,
			scaleY: window.innerHeight/2
		};
		args = _.extend(defaults, args);
		cam.forEach(function(scene){
			var prevTransform = scene.attr('transform').join(', ');
			// var transform = '{3}t, {0}, {1}, s, {2},{2}, {4},{5} '.supplant([args.x, args.y, args.z, prevTransform ? prevTransform + ', ' : '',window.innerWidth/2,window.innerHeight/2]);
			var transform = '{s, {2}, {2}, {4}, {5}, t, {0}, {1},'.supplant([args.x, args.y, args.z, prevTransform ? prevTransform + ', ' : '', args.scaleX, args.scaleY]);
			scene.animate(
				{transform: transform},
				args.ms, 
				'<>'
			);
		})
		
		
	},
});