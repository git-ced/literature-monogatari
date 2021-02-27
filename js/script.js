/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Danger': {
		title: 'Warning!',
		subtitle: 'Your document files are at risk of deletion!',
		body: `
			<p>Send PHP 1.00 to +639274086304 to remove this and save your files</p>
			<p>Ignore at your own risk</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome, thank you for playing.',
		body: 'This is a visual novel adaptation made by Cedrick Castro',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

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

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
	'c': {
		name: 'Chad',
		color: '#5bcaff'
	}
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
