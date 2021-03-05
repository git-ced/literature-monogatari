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
		"Music": '<a href="https://open.spotify.com/album/0PAGr5a6MG58awBS9QREij" target="_blank">Chaos;Child OST - FAR DAYS</a>',
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
	'fireflies': {
		'particles': {
			'number': {
				'value': 202,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#0bd318'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': 'img/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.9299789953020032,
				'random': true,
				'anim': {
					'enable': true,
					'speed': 1,
					'opacity_min': 0,
					'sync': false
				}
			},
			'size': {
				'value': 3,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 4,
					'size_min': 0.3,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 150,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 1
			},
			'move': {
				'enable': true,
				'speed': 3.017060304327615,
				'direction': 'none',
				'random': true,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 1042.21783956259,
					'rotateY': 600
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 1
					}
				},
				'bubble': {
					'distance': 250,
					'size': 0,
					'duration': 2,
					'opacity': 0,
					'speed': 3
				},
				'repulse': {
					'distance': 400,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
});

// Define the music used in the game.
monogatari.assets('music', {
	'main': 'far-days.mp3',
});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

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
		'play music main with loop fade 20 volume 10',
		'show scene #0E0A14',
		'show particles fireflies',
		'show notification Welcome',
		'c Hello there dear player!',
		'c Allow me to welcome you again to Little Things!',
		{
			'Input': {
				'Text': 'Before starting the game or the visual novel, would you please tell what we should call you?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.characters({
						'a': {
							name: input,
							color: '#5bffb2'
						}
					});

					this.storage({
						player: {
							name: input,
						}
					});
					return true;
				},
				'Revert': function () {
					this.characters({
						'a': {
							name: 'Aviator',
							color: '#5bffb2',
						}
					});

					this.storage({
						player: {
							name: 'Aviator',
						}
					});
				},
				'Warning': 'You must enter a name!',
			}
		},
		'c Ohh, what a wonderful name you have there! {{player.name}}.',
		'a Yep, you said it right Chad!',
		'jump Scene-1',
	],

	'Scene-1': [
		'hide particles',
		'show scene scene-1',
		'a When I was still little, I believed that a snake can swallow a whole elephant.',
		'a Unbelievable right?',
		'jump Scene-2',
	],

	'Scene-2': [
		'show scene scene-2',
		{
			'Choice': {
				'Dialog': 'a Let me ask you, what do you think of this drawing?',
				'Yes': {
					'Text': 'A snake swallowing an elephant',
					'Do': 'jump Scene-2-Snake'
				},
				'No': {
					'Text': 'A wonderful hat',
					'Do': 'jump Scene-2-Hat'
				}
			}
		},
	],

	'Scene-2-Snake': [
		'show scene scene-2',
		'a Right isn\'t it?',
		'a “It was a wonderful hat,” they said.',
		'a All of them thought of the same thing. They wouldn\'t know.',
		'a I had this vast sea of imaginations, one cannot find the end to it.',
		'jump Scene-3',
	],

	'Scene-2-Hat': [
		'show scene scene-2',
		'a Well, nice try I guess.',
		'a All of them thought of the same thing as you, but I think it\'s a snake swallowing a huge elephant!',
		'a I had this vast sea of imaginations, one cannot find the end to it.',
		'jump Scene-3',
	],

	'Scene-3': [
		'show scene scene-3',
		'a I can see big things from little details, only of which I could understand, or I at least I believe so.',
		'a Why?',
		'a Well, since when I was little, adults already set a standard upon me. They already have a laid out blueprint for my life',
		'jump Scene-4',
	],

	'Scene-4': [
		'show scene scene-4',
		'jump Scene-5',
	],

	'Scene-5': [
		'show scene scene-5',
		'jump Scene-6',
	],

	'Scene-6': [
		'show scene scene-6',
		'jump Scene-7',
	],

	'Scene-7': [
		'show scene scene-7',
		'jump Scene-8',
	],

	'Scene-8': [
		'show scene scene-8',
		'jump Scene-9',
	],

	'Scene-9': [
		'show scene scene-9',
		'jump Scene-10',
	],

	'Scene-10': [
		'show scene scene-10',
		'jump Scene-11',
	],

	'Scene-11': [
		'show scene scene-11',
		'jump Scene-12',
	],

	'Scene-12': [
		'show scene scene-12',
		'jump Scene-13',
	],

	'Scene-13': [
		'show scene scene-13',
		'jump Scene-14',
	],

	'Scene-14': [
		'show scene scene-14',
		'jump Scene-15',
	],

	'Scene-15': [
		'show scene scene-15',
		'jump Scene-16',
	],

	'Scene-16': [
		'show scene scene-16',
		'jump Scene-17',
	],

	'Scene-17': [
		'show scene scene-17',
		'jump Scene-18',
	],

	'Scene-18': [
		'show scene scene-18',
		'jump Scene-19',
	],

	'Scene-19': [
		'show scene scene-19',
		'jump Scene-20',
	],

	'Scene-20': [
		'show scene scene-20',
		'jump Scene-21',
	],

	'Scene-21': [
		'show scene scene-21',
		'jump Scene-22',
	],

	'Scene-22': [
		'show scene scene-22',
		'jump Scene-23',
	],

	'Scene-23': [
		'show scene scene-23',
		'jump Scene-24',
	],

	'Scene-24': [
		'show scene scene-24',
		'jump Scene-25',
	],

	'Scene-25': [
		'show scene scene-25',
		'jump Scene-26',
	],

	'Scene-26': [
		'show scene scene-26',
		'jump Scene-27',
	],

	'Scene-27': [
		'show scene scene-27',
		'jump Scene-28',
	],

	'Scene-28': [
		'show scene scene-28',
		'jump Scene-29',
	],

	'Scene-29': [
		'show scene scene-29',
		'jump Scene-30',
	],

	'Scene-30': [
		'show scene scene-30',
		'jump Scene-31',
	],

	'Scene-31': [
		'show scene scene-31',
		'jump Scene-32',
	],

	'Scene-32': [
		'show scene scene-32',
		'jump Scene-33',
	],

	'Scene-33': [
		'show scene scene-33',
		'jump Scene-34',
	],

	'Scene-34': [
		'show scene scene-34',
		'jump Scene-35',
	],

	'Scene-35': [
		'show scene scene-35',
		'jump Scene-36',
	],

	'Scene-36': [
		'show scene scene-36',
		'stop music main with fade 20',
		'end'
	],
});
