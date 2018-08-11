(function () { 'use strict';

// ******************* HOME *************** //
// ********** ************* *************** //

		var home_intro = new Vue({
			el: "#intro-home",
			data: {
				title: 'Designing future brand experiences',
				subtitle: 'Your strategic design partner, specializing in digital products & customer experience',
				backImg: 'photos/mountain.png'
			}
		});


		var home_process = new Vue({
			el: "#process",
			data: {
				title: 'Process',
				subtitle: 'Each client and project is unique. Through years learning from smart people at top design firms, I’ve honed a suite of skills which I adapt to each individual need.',
				url: '',
				phases: [
					{
						id: 'open-workshop',
						phaseNum: '01',
						phaseTitle: 'Workshops',
						description: 'Change begins with understanding & idea generation'
					},
					{
						id: 'open-research',
						phaseNum: '02',
						phaseTitle: 'Research',
						description: 'Identifying what needs to change and where to aim'
					},
					{
						id: 'open-strategy',
						phaseNum: '03',
						phaseTitle: 'Strategy',
						description: 'The art of figuring out the best way to get from here to there'
					},
					{
						id: 'open-design',
						phaseNum: '04',
						phaseTitle: 'Design',
						description: 'The blueprints for the future'
					},
					{
						id: 'open-prototyping',
						phaseNum: '05',
						phaseTitle: 'Prototyping',
						description: 'A simulation of change we can test'
					},
					{
						id: 'open-testing',
						phaseNum: '06',
						phaseTitle: 'Testing',
						description: 'Validating our direction, before we’ve gone too far'
					},
					{
						id: 'open-development',
						phaseNum: '07',
						phaseTitle: 'Development',
						description: 'A living, breathing product others can experience'
					},
					{
						id: 'open-hotchocolate',
						phaseNum: '08',
						phaseTitle: 'Hot Chocolate',
						description: 'A delicious beverage'
					},

				]
			}
		});


		var home_clients = new Vue({
			el: "#clients",
			data: {
				title: 'Clients',
				subtitle: 'I work with established global brands and innovative new startups throughout Europe and North America.',
				url: '',
				clients: [
					{ name: 'AbCellera' },	{ name: 'Arc’teryx' }, { name: 'AstraZeneca' }, { name: 'Bloombridge' }, { name: 'Brompton' },
					{ name: 'Cancer Research UK' },	{ name: 'Cape & Cape' }, { name: 'Elavon' }, { name: 'Ellwood Atfield' }, { name: 'Extreme Sports' },
					{ name: 'Finish Line' },	{ name: 'Galeries Lafayette' }, { name: 'Great British Racing' }, { name: 'Green Stone' }, { name: 'Halfords' },
					{ name: 'Hirepool' },	{ name: 'Hitsource' }, { name: 'Lendlease' }, { name: 'Manchester Airports Group' }, { name: 'Millenium Point' },
					{ name: 'Modern Dog Magazine' },	{ name: 'Rileys Sports Bars' }, { name: 'Royal Chelsea Hospital' }, { name: 'Tallink' }, { name: 'Telus' },
					{ name: 'The Hippodrome Casino' },	{ name: 'The Jockey Club' }, { name: 'The NEC Birmingham' }, { name: 'The Racecourse Association' }, { name: 'The Royal British Legion' },
					{ name: 'Travelaer' },	{ name: 'TravelSupermarket' }, { name: 'Vancity' }, { name: 'Wagamama' }, { name: 'WeWork' },
					{ name: 'Yocale' }
				]
			}
		});

		var home_experiments = new Vue({
			el: "#experiments",
			data: {
				title: 'Some experimentation',
				subtitle: 'We all need a chance to explore new ideas. Here are a couple of playthings I hacked together.',
				url: '',
				phases: [
					{
						phaseNum: 'Music Hack',
						phaseTitle: 'Blues harp',
						description: 'The world’s thinnest harmonica',
						url: 'http://itomblack.github.io/harp/'
					},
					{
						phaseNum: 'Data Viz Hack',
						phaseTitle: 'Whisky Map',
						description: 'Locate your ideal single malt whisky',
						url: 'https://itomblack.github.io/whisky-map/'
					}
				]
			}
		});


		var home_contact = new Vue({
			el: "#contact",
			data: {
				phaseNum: '',
				title: 'Contact',
				subtitle: 'I\'d love to chat',
				url: 'contact.html'
			}
		});




// ******************* CV ***************** //
// ********** ************* *************** //


		var home_contact = new Vue({
			el: "#intro-cv",
			data: {
				title: 'Curriculum Vitae.',
				subtitle: 'Ian Black',
				blurb: 'I partner with technology focussed companies to identify innovation opportunities and design interactions across their digital and physical brand touchpoints. I achieve this through an adaptable process of strategy, design & testing that delivering meaningful value for both the business and their customers.'
			}
		});



















// ******************* Non Content *************** //
// ********** ************* *************** //


		// ********** FADE OUT HERO IMAGE ********** //
		var fadeOutItem = document.getElementById('fade-img');
		var photoZIndex = fadeOutItem.style.zIndex;

		window.addEventListener('scroll', function() {
				var scrolled = window.pageYOffset;

				//for first bit of scroll do all the things
				// if (scrolled <= 1200) {
						var opacityLevel = 0.3 - (scrolled / 1000);
						fadeOutItem.style.opacity = opacityLevel;

						//once hidden move to back
						if ( opacityLevel <= 0 )  {
							fadeOutItem.style.display = 'none';
						} 

						// //reshow moving up
						if ( opacityLevel >= 0 ) {
							fadeOutItem.style.display = 'block';
						} 
				// }
		});
		// ********** END ********** //














}()); // end 'use strict'



