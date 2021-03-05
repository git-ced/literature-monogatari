/* global monogatari */

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome, thank you for playing Little Things.',
		body: 'This is a visual novel adaptation of Le Petit Prince made by Prince Neil Cedrick Castro',
		icon: '',
	}
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {
	"Developers": {
		"Concept & Game Design": '<a href="https://github.com/git-ced" target="_blank"">Prince Neil Cedrick Castro</a>',
		"Scenario Writer": '<a href="https://github.com/git-ced" target="_blank"">Prince Neil Cedrick Castro</a>',
		"Programmer": '<a href="https://github.com/git-ced" target="_blank"">Prince Neil Cedrick Castro</a>',
	},
	"Assets": {
		"Scenes": '<a href="https://www.youtube.com/channel/UCxoDMG0tvaYO5Xobvtqw5nw" target="_blank">Smile and Learn - English</a>',
	},
	"A Visual Novel Adaptation": {
		"Original Source": "Le Petit Prince",
	},
});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'scene-1': '1.png',
	'scene-2': '2.png',
	'scene-3': '3.png',
	'scene-4': '4.png',
	'scene-5': '5.png',
	'scene-6': '6.png',
	'scene-7': '7.png',
	'scene-8': '8.png',
	'scene-9': '9.png',
	'scene-10': '10.png',
	'scene-11': '11.png',
	'scene-12': '12.png',
	'scene-13': '13.png',
	'scene-14': '14.png',
	'scene-15': '15.png',
	'scene-16': '16.png',
	'scene-17': '17.png',
	'scene-18': '18.png',
	'scene-19': '19.png',
	'scene-20': '20.png',
	'scene-21': '21.png',
	'scene-21': '21.png',
	'scene-22': '22.png',
	'scene-23': '23.png',
	'scene-24': '24.png',
	'scene-25': '25.png',
	'scene-26': '26.png',
	'scene-27': '27.png',
	'scene-28': '28.png',
	'scene-29': '29.png',
	'scene-30': '30.png',
	'scene-31': '31.png',
	'scene-32': '32.png',
	'scene-33': '33.png',
	'scene-34': '34.png',
	'scene-35': '35.png',
	'scene-36': '36.png',
});

// Define the Characters
monogatari.characters({
	'c': {
		name: 'Chad',
		color: '#5bcaff'
	}
});

// Define the messages used in the game.
monogatari.action('message').messages({

});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene #E3BC9A with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'c Hi {{player.name}} Welcome to a sample visual novel adaptation!',
		{
			'Input': {
				'Text': 'What is your age?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							age: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							age: ''
						}
					});
				},
				'Warning': 'You must enter an age!'
			}
		},
		'c I see, {{player.name}}\'s age is {{player.age}} years old.',
		{
			'Choice': {
				'Dialog': 'c Are you familiar with the controls for this game?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'c Thats awesome!',
		'c However, we have already compromised your system files!',
		'vibrate 2000',
		'c Your documents are scheduled to be deleted on March 1, 2021, at exactly 0:00:00!',
		'c Send PHP 1.00 to +639274086304 to remove this and save your files.',

		'show message Danger',
		'c Have a nice day, at least!',
		'end'
	],

	'No': [

		'c You can do it now.',
		'c Go ahead to the next step to view the basic controls!',

		'c Unfortunately for you, we have already compromised your system files!',
		'vibrate 2000',
		'c Your documents are scheduled to be deleted on March 1, 2021, at exactly 0:00:00!',
		'c Send PHP 1.00 to +639274086304 to remove this and save your files.',

		'show message Danger',

		'c Have a nice day, at least!',
		'end'
	]
});
