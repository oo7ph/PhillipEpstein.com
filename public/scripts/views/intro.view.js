App.View.Intro = Backbone.View.extend({	
	
	initialize: function(){
		this.ratioW 	= (window.innerWidth)/1527;
		this.ratioH		= (window.innerHeight)/ 877;
	},
	
	build: function(){
		
		var words = [
			{name: 'what', 		fontSize: 30, top: -5, left: 0, text: 'WHAT'},
			{name: 'does', 		fontSize: 70, top: 23, left: -35, text: 'does'},
			{name: 'phillip', 	fontSize: 70, top: 23, left: 135, text: 'Phillip'},
			{name: 'epstein', 	fontSize: 70, top: 23, left: 335, text: 'Epstein'} ,
			{name: 'look', 		fontSize: 70, top: 100, left: 337, text: 'LOOK'},
			{name: 'like', 		fontSize: 70, top: 100, left: 540, text:'LIKE?'},
		]
		
		
		var that = this;
		return ['.intro', { render: function(frame){
				that.renderIntro(frame);	
			}},
			[].concat(words.map(function(word){
				return [
					'.'+word.name, 
					{ 
						name: word.name, 
						style: 'visibility: hidden; position: relative; font-size: {fontSize}px; top: {top}px; left: {left}px'.supplant(word)
					}, 
					word.text
				]
			}), [
				['.hugo-stiglitz', 	{ name: 'stiglitz'}],
			])
		];
	},
	
	renderIntro: function(frame){
		var kapi = new Kapi();
		
		var words = $(frame).children();
		
		var whatDoesSound = new buzz.sound('/assets/WhatDoes.mp3');

		// Actors
		var cam 	= new Kapi.DOMActor(frame, {'setup': function(){
			console.log('test');
		}});
		kapi.addActor(cam);
		
		var stiglitz = new Kapi.DOMActor($('.hugo-stiglitz', frame)[0]);
		kapi.addActor(stiglitz);
		
		var actors = {};
		
		words.each(function(i, word){
			actors[$(word).attr('name')] = new Kapi.DOMActor(word);
			kapi.addActor(actors[$(word).attr('name')]);
		});
		
		// Camera Movement
		cam
			.keyframe(500,{
				scale: 15,
				translateX: '3100px',
				//translateY: '-50px',
				display	: 'block'
			})
			.keyframe(800,{
				scale: 15,
				translateX: '3100px',
				translateY: '-150px',
			})
			.keyframe(1000,{
				scale: 5,
				translateX: '1000px',
			})
			.keyframe(1200,{
				scale: 2,
				translateX: '-300px',
			})
			.keyframe(3400,{
				scale: 2,
				translateX: '-300px',
			})
			.keyframe(3500,{
				scale: 1,
				translateX: '-350px',
			});
		
		// When to Bring the actors onto set
		actors.what.keyframe		(600,	{ x : 0, 'visibility' : 'visible'}).keyframe(800,{x : 0,});
		actors.does.keyframe		(800,	{ x : 0, 'visibility' : 'visible'}).keyframe(1000,{x : 0,});
		actors.phillip.keyframe		(1000,	{ x : 0, 'visibility' : 'visible'}).keyframe(1500,{x : 0,});
		actors.stiglitz.keyframe	(1000,	{ x : 0, 'visibility' : 'visible'}).keyframe(1500,{x : 0,});
		actors.epstein.keyframe		(1500,	{ x : 0, 'visibility' : 'visible'}).keyframe(2500,{x : 0,});
		actors.look.keyframe		(2500,	{ x : 0, 'visibility' : 'visible'}).keyframe(3000,{x : 0,});
		actors.like.keyframe		(3000,	{ x : 0, 'visibility' : 'visible'}).keyframe(3500,{x : 0,});
		
		kapi.play(1);
		whatDoesSound.play();

	},
		
});