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
	},
	'l': {
		name: 'Little Prince',
		color: '#EE9737',
	},
	'g': {
		name: 'The Guy',
		color: '#238479',
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
		'a They bound me to the chains of their ideals and expectations, one that was already decided by the society.',
		'a I was told to study math, geography, and other stuff as they claimed that it was for my own good.',
		'jump Scene-5',
	],

	'Scene-5': [
		'show scene scene-5',
		'a I wanted to flow against this absurd way of living.',
		'a Why would I have to fit in this kind of life?',
		'a Shouldn’t I do what I want and live myself to the fullest?',
		'a I want freedom, just like how I can fly through my imaginations.',
		'a So then, I aspired to become an aviator...',
		'jump Scene-6',
	],

	'Scene-6': [
		'show scene scene-6',
		'a From up here, I can see the frustrations of the other people in their “adult life”.',
		'a Doing paperwork, the same thing everyday...',
		{
			'Choice': {
				'Dialog': 'a Do they like what they’re doing?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Scene-7',
				},
				'No': {
					'Text': 'No',
					'Do': 'jump Scene-7',
				},
				'Maybe': {
					'Text': 'Maybe',
					'Do': 'jump Scene-7',
				}
			}
		}
	],

	'Scene-7': [
		'show scene scene-7',
		'a I always believed that I am the weird one in this place where everyone is alike',
		'a Even as I do my job as an aviator...',
		'a I always tried to explore, looking outside the box and seek appreciation for little things.',
		'jump Scene-8',
	],

	'Scene-8': [
		'show scene scene-8',
		'a As I traversed the Sahara Desert...',
		'vibrate 200',
		'a Hmm? what\'s that...',
		'a Oh no! the plane engine broke',
		'vibrate 200',
		'jump Scene-9',
	],

	'Scene-9': [
		'show scene scene-9',
		'a As I gained consciousness, it was just me, my plane, the sands, and a deep sea of silence.',
		'a All of a sudden...',
		'a A blue-eyed boy, with his hair soaked with gold, appeared in front of my mesmerized eyes.',
		'jump Scene-10',
	],

	'Scene-10': [
		'show scene scene-10',
		'a He’s like a little prince...',
		'l "Hey mister, could you draw me a lamb?"',
		'a "Of course, just wait there for a moment"',
		'a I grabbed a notebook and a pen in my bag.',
		'a To be honest, I didn’t know what to draw, so I drew 3 little lambs.',
		'jump Scene-11',
	],

	'Scene-11': [
		'show scene scene-11',
		'l "This is not it, could you please draw me more?"',
		'a I guess he didn\'t like all of the lambs I drew...',
		'jump Scene-12',
	],

	'Scene-12': [
		'show scene scene-12',
		'a So, I just drew a box and plan to tell him that the lamb he wanted was in there',
		'l "Really? wow, I love it!"',
		'a He happily smiled and stayed with me for a while.',
		'a Out of curiosity, I wanted to know how he ended up in the middle of the desert...',
		'a "Where did you come from little kid?"',
		'l "I\'m not a little kid, I\'m a little prince!"',
		'jump Scene-13',
	],

	'Scene-13': [
		'show scene scene-13',
		'l "I came from a small planet from far-away."',
		'l "I always loved watching the sun set there."',
		'a He knows how to appreciate little things in life...',
		'a Might be an unbelievable story, but the kid in my heart went along with his imaginative background',
		'jump Scene-14',
	],

	'Scene-14': [
		'show scene scene-14',
		'l "There are two types of plant that would grow on my planet. A good one and a bad one."',
		'l "Bad plants should be plucked out, as their roots could eventually destroy my small planet."',
		'a I sort of agreed, as when I was a kid, I got fed up with negative emotions due to the constant pressure I receive from society.',
		'jump Scene-15',
	],

	'Scene-15': [
		'show scene scene-15',
		{
			'Choice': {
				'Dialog': 'l “Why do roses have thorns?”',
				'Protect': {
					'Text': 'To protect themselves from animals',
					'Do': 'next'
				},
				'NoReason': {
					'Text': 'I`m not sure...',
					'Do': 'next'
				}
			}
		},
		'l "Its to protect themselves, even so, they are still harmed by animals"',
		'a "Wait, wait, I think we should now focus on important stuffs. We are stranded here in the desert!',
		'jump Scene-16',
	],

	'Scene-16': [
		'show scene scene-16',
		'l "But, roses\' thorns are also important. Don\'t you think so? They had it for millions of years, yet they are still harmed"',
		'jump Scene-17',
	],

	'Scene-17': [
		'show scene scene-17',
		'a He is right, most of the important things to the adult world consists of power, status, and money.',
		'a Important things are only those who bring benefit to them.',
		'a They don\'t see and appreciate the small details in the world.',
		'jump Scene-18',
	],

	'Scene-18': [
		'show scene scene-18',
		'a "Ok, let\'s here your story little prince."',
		'l "One day, I decided to set foot on a journey to different planets. I had to leave my rose behind."',
		'l "That was no ordinary rose, that was my rose."',
		'a It reminded me of the moment I graduated from being a kid.',
		'a Leaving behind the joyous yet creative childhood moments. In a mission to explore the adult way of living',
		'a For me, that was no ordinary childhoold, that was my childhood',
		'jump Scene-19',
	],

	'Scene-19': [
		'show scene scene-19',
		'l "I met different kinds of people..."',
		'l "All of them seem weird to me"',
		'l "The first one that I met wished obedience and loyalty from me, he was the only person in his planet!"',
		'a Ohh, so no one to govern on his lonely planet, he begged the prince to stay',
		'l "I think it\'s ridiculous, so I continued on my journey"',
		'a Perhaps, there are also people in my world who seek power yet gain nothing',
		'jump Scene-20',
	],

	'Scene-20': [
		'show scene scene-20',
		'l "On the next planet, I met another mysterious person..."',
		'l "He wanted me to applaud him all day long!"',
		'jump Scene-21',
	],

	'Scene-21': [
		'show scene scene-21',
		'g “You must’ve admired me so much, don’t you?”',
		'a “Wait what, I thought the clap was obligatory, bold of him to say that to you little prince”',
		'l "Right? weird isn\'t it"',
		'jump Scene-22',
	],

	'Scene-22': [
		'show scene scene-22',
		'l "But, why would the guy want admiration from me?"',
		'a "Because they want validation from others as they themselves don\’t know if they truly did something remarkable"',
		'a They hope to get their status lifted from the validation and admiration of others.',
		'jump Scene-23',
	],

	'Scene-23': [
		'show scene scene-23',
		'a Continuing on his journey, he came across with another adult. A lone man on his planet whose hobby and desire is to collect stars.',
		'l "The man spouted numbers and calculations to me while I stood in front of him"',
		'jump Scene-24',
	],

	'Scene-24': [
		'show scene scene-24',
		'a From what I am hearing from his story, the man is like a businessman.',
		'a There are people in this world who only care about increasing the number of money they have in the bank.',
		'a Store them and then what?',
		'a "For what purpose do you think those numbers represent if they are only kept for the sake of having them counted"',
		'jump Scene-25',
	],

	'Scene-25': [
		'show scene scene-25',
		'l “Haha, isn’t that pointless? I think you spend them for the pleasure of your own and others”',
		'a "Yeah, should be. But don’t forget to save some as you might need it at unexpected times"',
		'jump Scene-26',
	],

	'Scene-26': [
		'show scene scene-26',
		'a At some point, I realized, “Wow, we sure do agree on a lot of things”.',
		'a I bet we could be best friends if we met when I was still a child.',
		'jump Scene-27',
	],

	'Scene-27': [
		'show scene scene-27',
		'l "At my last stop, I met a guy that would turn a lamp on and off depending on the time of the day"',
		'l "He would turn on the lamp if it\'s nighttime, and turn it off at daytime"',
		'jump Scene-28',
	],

	'Scene-28': [
		'show scene scene-28',
		'g “The planet has become smaller, so the cycle of day and night became shorter, but I still have the same job to do.”',
		'g "Even so, I’m still happy with what I’m doing..."',
		'a Well to me, it sounded like he doesn’t have any time to rest',
		'jump Scene-29',
	],

	'Scene-29': [
		'show scene scene-29',
		'a There are also many like him on this planet of mine. People who are blinded by their duty or passion.',
		'a To the point where they forgot to take care of themselves...',
		'a Even if the circumstances change in the society, they are still expected to perform the same or with even better quality.',
		'jump Scene-30',
	],

	'Scene-30': [
		'show scene scene-30',
		'l "You know what, to me, he was the least absurd of all those I met"',
		'l "At the very least, that man doesn’t only think of himself, unlike the others"',
		'a The lamp guy desired stability in his ever changing surrounding',
		'a Although, the bad thing is...',
		'a he forgets to take care of himself',
		'jump Scene-31',
	],

	'Scene-31': [
		'show scene scene-31',
		'a After telling the story, the little prince fell asleep.',
		'a I held him gently, treating him like a soft kid he was.',
		'a He was probably the messiah that kept my sanity in this vast desert. An oasis, a treasure to be cherished.',
		'jump Scene-32',
	],

	'Scene-32': [
		'show scene scene-32',
		'a At a deeper thought, It was as if I’m looking at myself...',
		'a The little prince resembles me and my experiences so much.',
		'a Maybe he is me? just kidding, couldn\'t be',
		'jump Scene-33',
	],

	'Scene-33': [
		'show scene scene-33',
		'a After I woke up the next morning, I couldn’t find my companion, the little prince',
		'a He might’ve already left to set foot on another planet',
		'a The story might not be real, it might be a dream, but I am convinced that he is like the kid in me',
		'jump Scene-34',
	],

	'Scene-34': [
		'show scene scene-34',
		'a Many years had gone by then, I still haven’t heard news from him.',
		'a I still believe that he left that morning, because his little body was nowhere to be seen.',
		'a The moment I crashed in the Sahara Desert was the definitely the most memorable one to me',
		'jump Scene-35',
	],

	'Scene-35': [
		'show scene scene-35',
		'a Even if it was an unfortunate event...',
		'a The little prince taught me to not rush right away, but enjoy the sands, and the other little things to be seen.',
		'a It might also be the time he disappeared from me, but starting that day, I never lost sight of the kid I have inside my heart.',
		'jump Scene-36',
	],

	'Scene-36': [
		'show scene scene-36',
		'stop music main with fade 20',
		'end'
	],
});
