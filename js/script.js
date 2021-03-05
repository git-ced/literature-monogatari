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
		'show scene #0E0A14 with fadeIn',
		'jump Scene-1',
	],

	'Scene-1': [
		'show scene scene-1 with fadeIn',
		'jump Scene-2',
	],

	'Scene-2': [
		'show scene scene-2 with fadeIn',
		'jump Scene-3',
	],

	'Scene-3': [
		'show scene scene-3 with fadeIn',
		'jump Scene-4',
	],

	'Scene-4': [
		'show scene scene-4 with fadeIn',
		'jump Scene-5',
	],

	'Scene-5': [
		'show scene scene-5 with fadeIn',
		'jump Scene-6',
	],

	'Scene-6': [
		'show scene scene-6 with fadeIn',
		'jump Scene-7',
	],

	'Scene-7': [
		'show scene scene-7 with fadeIn',
		'jump Scene-8',
	],

	'Scene-8': [
		'show scene scene-8 with fadeIn',
		'jump Scene-9',
	],

	'Scene-9': [
		'show scene scene-9 with fadeIn',
		'jump Scene-10',
	],

	'Scene-10': [
		'show scene scene-10 with fadeIn',
		'jump Scene-11',
	],

	'Scene-11': [
		'show scene scene-11 with fadeIn',
		'jump Scene-12',
	],

	'Scene-12': [
		'show scene scene-12 with fadeIn',
		'jump Scene-13',
	],

	'Scene-13': [
		'show scene scene-13 with fadeIn',
		'jump Scene-14',
	],

	'Scene-14': [
		'show scene scene-14 with fadeIn',
		'jump Scene-15',
	],

	'Scene-15': [
		'show scene scene-15 with fadeIn',
		'jump Scene-16',
	],

	'Scene-16': [
		'show scene scene-16 with fadeIn',
		'jump Scene-17',
	],

	'Scene-17': [
		'show scene scene-17 with fadeIn',
		'jump Scene-18',
	],

	'Scene-18': [
		'show scene scene-18 with fadeIn',
		'jump Scene-19',
	],

	'Scene-19': [
		'show scene scene-19 with fadeIn',
		'jump Scene-20',
	],

	'Scene-20': [
		'show scene scene-20 with fadeIn',
		'jump Scene-21',
	],

	'Scene-21': [
		'show scene scene-21 with fadeIn',
		'jump Scene-22',
	],

	'Scene-22': [
		'show scene scene-22 with fadeIn',
		'jump Scene-23',
	],

	'Scene-23': [
		'show scene scene-23 with fadeIn',
		'jump Scene-24',
	],

	'Scene-24': [
		'show scene scene-24 with fadeIn',
		'jump Scene-25',
	],

	'Scene-25': [
		'show scene scene-25 with fadeIn',
		'jump Scene-26',
	],

	'Scene-26': [
		'show scene scene-26 with fadeIn',
		'jump Scene-27',
	],

	'Scene-27': [
		'show scene scene-27 with fadeIn',
		'jump Scene-28',
	],

	'Scene-28': [
		'show scene scene-28 with fadeIn',
		'jump Scene-29',
	],

	'Scene-29': [
		'show scene scene-29 with fadeIn',
		'jump Scene-30',
	],

	'Scene-30': [
		'show scene scene-30 with fadeIn',
		'jump Scene-31',
	],

	'Scene-31': [
		'show scene scene-31 with fadeIn',
		'jump Scene-32',
	],

	'Scene-32': [
		'show scene scene-32 with fadeIn',
		'jump Scene-33',
	],

	'Scene-33': [
		'show scene scene-33 with fadeIn',
		'jump Scene-34',
	],

	'Scene-34': [
		'show scene scene-34 with fadeIn',
		'jump Scene-35',
	],

	'Scene-35': [
		'show scene scene-35 with fadeIn',
		'jump Scene-36',
	],

	'Scene-36': [
		'show scene scene-36 with fadeIn',
		'end'
	],
});
