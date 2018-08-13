(function () { 'use strict';



// ******************* menu ***************** //
// ********** ************* *************** //

var menu = new Vue({
	el: "#menu",
	data: {
		links: [
			{
				text: 'Process',
				url: 'index.html',
				class: 'menu-process'
			},
			{
				text: 'About',
				url: 'about.html',
				class: 'menu-about'
			},
			{
				text: 'CV',
				url: 'cv.html',
				class: 'menu-cv'
			},
			{
				text: 'Contact',
				url: 'contact.html',
				class: 'menu-contact'
			}
		]
	}
});




















// ******************* HOME *************** //
// ********** ************* *************** //

	var home_intro = new Vue({
		el: "#intro-home",
		data: {
			title: 'Designing future brand experiences',
			subtitle: 'Your partner for strategic design – I specialize in digital products & customer experience',
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
			title: 'Experiments',
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
			title: 'Let\'s connect',
			subtitle: 'What have you got to lose?',
			url: 'contact.html'
		}
	});




















// ******************* CV ***************** //
// ********** ************* *************** //


	var cv_intro = new Vue({
		el: "#intro-cv",
		data: {
			title: 'Curriculum Vitae.',
			subtitle: 'Ian Black',
			blurb: 'You’re probably busy, so I’ll keep this short & sweet. I partner with technology focussed companies to design new & improved experiences for their customers & teams. I achieve this through strategy, design, content and prototyping. If you want to know more, just ask. That’s it really.'
		}
	});

	var cv_education = new Vue({
		el: "#education",
		data: {
			title: 'Education',
			uni: 'Sheffield School Of Architecture',
			degree: 'Architecture BA(Hons) : Upper 2nd Class',
			school: 'Eltham College',
			grades: [
				{ level: '3 A grade A-levels' },
				{ level: '1 A grade AS-level' },
				{ level: '10 A* to A grade GCSEs' }
			]
		}
	});

	var cv_jobs = new Vue({
		el: "#employment",
		data: {
			title: 'Employment',
			jobs: [
				{
					company: 'Green Stone',
					description: 'A distributed experience design firm',
					dates: 'Feb 2018 - Current',
					url: 'https://www.greenstone.co/',
					role: 'Experience Designer (Contract)',
					responsibilities: [
						{ bullet: '<span>Competitive research</span> & <span>content strategy</span> for a major US sportswear brand' },
						{ bullet: '<span>User research</span>, <span>analysis</span> & <span>usability testing</span> for a world class biotech company' },
						{ bullet: 'Research, <span>UX design</span> & <span>UI design</span> for a customer-centric airline software company' },
						{ bullet: 'Product pitch-deck <span>storytelling</span> and design for brands, through <span>Google Slides</span>' },
						{ bullet: '<span>Experience strategy</span> for a new <span>e-commerce</span> white-glove delivery service' },
						{ bullet: 'Collaborative <span>ideation sessions</span> via <span>Zoom</span> and <span>RealtimeBoard</span>' },
						{ bullet: '<span>Project & client management</span> for international companies, across multiple timezones' },
						{ bullet: '<span>Business development</span> to bring in new clients in new industry sectors' },
						{ bullet: 'Developing and presenting a new <span>client retention strategy</span> to senior leadership' },
						{ bullet: 'Concept prototyping using <span>HTML</span>, <span>SCSS</span>, and <span>Javascript</span>, run through <span>Gulp</span>' },
						{ bullet: 'Organisation, facilitation & <span>video production</span> for Green Stone’s design debates' }
					]
				},
				{
					company: 'Invoke',
					description: 'A Vancouver-based digital product design agency',
					dates: 'May 2017 - Feb 2018',
					url: 'https://www.invokedigital.co/',
					role: 'Senior Product Designer',
					responsibilities: [
						{ bullet: '<span>Product strategy</span> for the largest Credit Union in Canada' },
						{ bullet: '<span>Brand creation</span> and <span>product design</span> for a new online music marketplace, using <span>Sketch</span> and <span>InVision</span>' },
						{ bullet: 'Running sprint-based <span>rapid-prototyping</span> & <span>user testing</span> sessions for clients, capturing quantitative and qualitative feedback through <span>Typeform</span>' },
						{ bullet: '<span>Design workshop</span> planning & facilitation' },
						{ bullet: '<span>Project scoping</span> & <span>planning</span> in an <span>agile</span>, <span>sprint-based</span> model' },
						{ bullet: 'Collaborating with developers on production through <span>Zeplin</span>' }
					]
				},
				{
					company: 'Beyond',
					description: 'A global design, technology, and ideas company',
					dates: 'Aug 2016 - Jan 2017',
					url: 'https://bynd.com/',
					role: 'Senior UX Designer',
					responsibilities: [
						{ bullet: '<span>Service design</span>, <span>UX</span> and <span>UI design</span> for a major travel price comparison site' },
						{ bullet: 'Leading <span>UX workshops</span> for the UK\'s 2nd largest Supermarket' },
						{ bullet: 'Prototyping designs with live data using <span>HTML</span> and <span>Handlebars.JS</span>, hosted through <span>Github</span>' },
						{ bullet: '<span>Mentoring</span> junior design team members' },
						{ bullet: 'Design team <span>recruitment' }
					]
				},
				{
					company: 'Pebble Code',
					description: 'A London-based agile software development company',
					dates: 'Jan 2015 - Jul 2016',
					url: '',
					role: 'UX / UI Designer',
					responsibilities: [
						{ bullet: 'Research, <span>UI design</span> & <span>front-end development</span> of enterprise software for the UK\'s largest pharmaceutical company' },
						{ bullet: 'Project & client management, from <span>proposal to production</span>' },
						{ bullet: '<span>Project scoping</span> and <span>budgeting</span>' },
						{ bullet: 'Organising (& occasionally winning) <span>hack-days</span>' },
						{ bullet: 'Running lunchtime art classes for <span>fun</span>' }
					]
				},
				{
					company: 'Harrison:Fraser',
					description: 'A London-based brand strategy agency',
					dates: 'Jan 2012 - Jul 2014',
					url: 'http://www.harrisonfraser.com/',
					role: 'Graphic Designer',
					responsibilities: [
						{ bullet: 'Brand design & <span>customer experience strategy</span> for an international client list' },
						{ bullet: 'Designing for <span>print</span>, <span>digital</span> & <span>interiors</span> for the retail & leisure industries, using <span>Photoshop, <span>Illustrator, <span>InDesign & <span>AutoCAD' },
						{ bullet: 'Branded animation production using <span>After Effects</span>' },
						{ bullet: 'Collaborating with brand planners, clients & suppliers to deliver engaging brand experiences' }
					]
				}
			]
		}
	});

















// ******************* Contact ***************** //
// ********** ************* *************** //




	var contact_intro = new Vue({
		el: "#intro-contact",
		data: {
			title: 'Get in touch',
			subtitle: 'I’m always open to a chat, over tea or the web',
			backImg: 'photos/contact.png'
		}
	});


	var contact_book = new Vue({
		el: "#bookchat",
		data: {
			phaseNum: '',
			title: 'Book a chat',
			subtitle: 'Find a time in my calendar to talk',
			url: 'http://calendly.com/iblack'
		}
	});

	var contact_social = new Vue({
		el: "#connect-links",
		data: {
			title: 'Social Networks',
			links: [
				{ name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/itomblack/'
				},
				{ name: 'Github',
					url: 'http://github.com/itomblack/'
				},
				{ name: 'Instagram',
					url: 'https://www.instagram.com/itomblack/'
				},
				{ name: 'Medium',
					url: 'https://medium.com/@itomblack88'
				}
			]
		}
	});



















// ******************* About ***************** //
// ********** ************* *************** //

var about_intro = new Vue({
	el: "#intro-about",
	data: {
		title: 'About',
		subtitle: '',
		backImg: 'photos/me-1.png'
	}
});

var about_journey = new Vue({
	el: "#about-journey",
	data: {
		title: 'My journey',
		subtitle: 'Life began in London, England',
		url: '',
		para: '18 years later I began studying to be an Architect. Keen for a faster paced industry, I took my first design role out of University as a Graphic Designer in a boutique brand strategy agency. </br></br>Following years of excellent mentorship, I dove into the world of UI design & development, before continuing into the burgeoning discipline of User Experience. </br></br>I later moved across the Atlantic to Vancouver, to explore the wilderness. When I’m not at my desk you’ll find me lugging my camera up mountains, catching waves at sunset or digging my snowboard out of waist-deep white powder.</br></br>I’ve touched on many aspects of design over the years – from the built landscape to virtual environments – but the focus has always been about delivering value, for real people.',
		img: 'photos/me-2.png'
	}
});


var about_quotes = new Vue({
		el: "#about-quotes",
		data: {
			title: 'Testimonials',
			subtitle: 'A few kind words from clients & colleagues',
			url: '',
			quotes: [
				{ name: 'Murray McCutcheon',
					company: 'Business Development  •  AbCellera',
					quote: 'Ian did a great job delivering value, and the team is very positive about his work. I speak for many in saying we hope we have the opportunity to work together with him again.'
				},
				{ name: 'David Sutton',
					company: 'Product Design Director  •  Beyond',
					quote: 'Ian & I worked closely together on a daily basis throughout his time at Beyond, and was always professional and accountable for his work. He always met and exceeded his obligations to his team.'
				},
				{ name: 'Justin Pybus',
					company: 'UI Designer •  TravelSupermarket',
					quote: 'Ian really is a master of all his trades. He has an exceptional depth and breadth of knowledge that spans from code to UI Design, from ideation sessions & workshops, to delivering in depth bodies of research. He designs practical solutions that have a measurable impact on the business - Invest in Ian - he\'s a winner!'
				}
			]
		}
	});


var about_articles = new Vue({
		el: "#about-writing",
		data: {
			title: 'Selected Writing',
			subtitle: 'Because content matters',
			url: '',
			phases: [
				{
					phaseTitle: '7 big trends in branded content strategy',
					url: 'https://medium.com/@itomblack88/7-big-trends-in-branded-content-strategy-119a61405b2c'
				},
				{
					phaseTitle: 'Welcome to the world of new retail',
					url: 'https://medium.com/@itomblack88/welcome-to-the-world-of-new-retail-10157802db3a'
				},
				{
					phaseTitle: 'How facebook deals with a breakup',
					url: 'https://blog.prototypr.io/how-facebook-deals-with-a-breakup-df49fd879059'
				},
				{
					phaseTitle: 'Always bring the hot chocolate',
					url: 'https://medium.com/@itomblack88/always-bring-the-hot-chocolate-7a175df69f82'
				}
			]
		}
	});






// ******************* PROCESS STAGES ***************** //
// ********** ************************ *************** //

var about_articles = new Vue({
		el: "#modal-panel",
		data: {
			phases: [
				{
					id: 'proj-workshop',
					title: 'Workshops',
					casestudy: 'Example case study',
					subtitle: 'Vancity',
					summary: 'A Customer-Focussed Approach To Financial Wellbeing',
					para: 'This major Canadian financial institution knew they needed a best-in-class experience for their digitally-savvy, socially-conscious customers, but weren’t sure what that actually meant… so I helped them figure it out.</br></br>Tapping into expert knowledge from staff throughout their customer service teams, together we mapped the existing customers experience, identifying key pain points to explore in the research phase. After pinning down an initial strategy, I ran ideation workshops to generate and refine ideas for a prototype. Many of the team had never sketched before, but did an amazing job of getting stuck in with pens and paper.',
					images: [
						{ oneImage: 'work/work-1.jpg' },
						{ oneImage: 'work/work-2.jpg' },
						{ oneImage: 'work/work-3.jpg' },
						{ oneImage: 'work/work-4.jpg' }
					]
				},
				{
					id: 'proj-research',
					title: 'Research',
					casestudy: 'Example case study',
					subtitle: 'AbCellera',
					summary: 'An Innovative Approach to Antibody Exploration',
					para: 'This Vancouver-based Biotech startup had developed the world’s leading technology for screening and mapping of natural immune responses. Their development team had built a unique data visualization product that enabled scientists to explore their antibody data in a revolutionary new way, but were struggling with how to expand the feature set without compromising on usability.</br></br>Combining a series of contextual interviews with a heuristic audit, I delivered insight into the core product problems, and mapped out a strategy for change. I followed up with a UX & UI overhaul to address each opportunity. The team were delighted at the end of it, but that could have been because of the celebratory donuts we ate that day!',
					images: [
						{ oneImage: 'work/rsrch-1.jpg' },
						{ oneImage: 'work/rsrch-2.jpg' },
						{ oneImage: 'work/rsrch-3.jpg' },
						{ oneImage: 'work/rsrch-4.jpg' },
						{ oneImage: 'work/rsrch-5.jpg' }
					]
				},
				{
					id: 'proj-strategy',
					title: 'Strategy',
					casestudy: 'Example case study',
					subtitle: 'Finish line',
					summary: 'Connecting Content with Commerce',
					para: 'This American athletics retail brand needed some fresh thinking on their content strategy. How could they use written word to drive higher sales on their e-commerce sites? Through an audit of their competitive landscape, I delivered a presentation of best-in-class content creator brands, alongside the major strategies they needed to adopt in order to remain a key player in the game. It\'s a bit hush, hush though.',
					images: [
						{ oneImage: 'work/strat-1.jpg' },
						{ oneImage: 'work/strat-2.jpg' }
					]
				},
				{
					id: 'proj-design',
					title: 'Design',
					casestudy: 'Example case study',
					subtitle: 'Travelaer',
					summary: 'Customer-centric Airline Upgrades',
					para: 'This European product company creates digital products for the travel industry that enable their partners to improve their customer experience and increase revenue. Having identified an opportunity to deliver simpler, smarter, targeted upgrades to frequent flyers, they needed help auditing the competitive landscape, designing the end-to-end customer experience on mobile, and piecing it all together into powerful pitch deck with a compelling story to approach the airlines with. They were delighted with where we landed.',
					images: [
						{ oneImage: 'work/des-1.jpg' },
						{ oneImage: 'work/des-2.jpg' },
						{ oneImage: 'work/des-3.jpg' },
						{ oneImage: 'work/des-4.jpg' },
					]
				},
				{
					id: 'proj-prototyping',
					title: 'Prototyping',
					casestudy: 'Example case study',
					subtitle: 'Hitsource',
					summary: 'A Brand New Music Maker’s Marketplace',
					para: 'After leaving the performance side of the hip-hop game, this client dreamt of building an invite-only marketplace for buying & selling hip-hop beats. I brought their vision to life by defining the MVP, developing a new brand identity, designing the user experience and creating a high fidelity prototype of the complete digital product.',
					images: [
						{ oneImage: 'work/proto-1.jpg' },
						{ oneImage: 'work/proto-4.jpg' },
						{ oneImage: 'work/proto-2.jpg' },
						{ oneImage: 'work/proto-3.jpg' }
					]
				},
				{
					id: 'proj-testing',
					title: 'Testing',
					casestudy: 'Example case study',
					subtitle: 'TravelSupermarket',
					summary: 'A/B Testing For Online Deal Comparison',
					para: 'Helping TravelSupermarket deliver business results required super targeted design work, thoroughly tested to hit KPIs. As an embedded member of their design team, leading the UX, I designed a number of search results cards based on key customer insights. Each redesign was assessed by senior management before being subject to live A/B testing with thousands of users. Sometimes the results surprised us, but every time we managed to increase conversion rates by percentage points, creating a increasingly successful product, and a very happy client.',
					images: [
						{ oneImage: 'work/test-1.jpg' },
						{ oneImage: 'work/test-2.jpg' },
						{ oneImage: 'work/test-3.jpg' },
						{ oneImage: 'work/test-4.jpg' }
					]
				},
				{
					id: 'proj-development',
					title: 'Development',
					casestudy: 'Example case study',
					subtitle: 'The Quarry',
					summary: 'Connecting A Remote Network',
					para: 'Green Stone had an intimate network of experts at their fingertips, but struggled with opening up that resource to help others. How could people who have never met discover key new contacts? Combining the data stored in their digital black book of names, with content taken from public LinkedIn profiles, I developed a browsable, searchable, visual index of the network as a proof of concept. By combining this with private social space through Facebook, we now had a system where people could find individuals with specific skills, and reach out to them in a trusted, secure setting. It was the first step in one agency\'s goal to give back to their design community.',
					images: [
						{ oneImage: 'work/dev-1.jpg' },
						{ oneImage: 'work/dev-2.jpg' },
						{ oneImage: 'work/dev-3.jpg' },
					]
				},
				{
					id: 'proj-hotchocolate',
					title: 'Hot Chocolate',
					casestudy: '',
					subtitle: 'A Little Perspective',
					summary: 'Sometimes it\'s just what you need',
					para:  'It’s easy to map the design process as this fixed, linear process. Just follow the path to success and that’s all it takes, right? Sometimes, sure, but design doesn’t just happen at a desk. We all know the cliche that the best ideas come to us in the shower. The mind needs time to relax, to digest, to process, to loosely wander.</br></br>For me, this means stopping every once in a while to take a breath, or a stroll. To sit down with my thoughts or with a friend. To let things stew, or to talk things through. At a cafe, by the beach or in the mountains. But, most importantly, with a fresh bowl of rich, dark hot chocolate warming my hands and my soul. Because we all need that little escape. A little perspective. A little chocolate.</br></br>It’s all part of the process.',
					images: [
						{ oneImage: 'work/hot-1.jpg' }
					]
				},
				
						
			]
		}
	});











// ******************* Non Content *************** //
// *************** *************** *************** //




// Click project
if ( document.getElementById('modal') ) {
		var processElements = document.querySelectorAll(".process-link");
		var modal = document.getElementById('modal');
		var closeBtn = document.getElementById('close-modal');
		var closePanel = document.getElementById('close-panel');
		var project;


		for (var i = 0; i < processElements.length; i++) {
		  processElements[i].addEventListener("click", function() {
		    
		  	//get ID
		    var processId = this.id;
		    var showProjectId = processId.replace("open", "proj");

		    //open modal
		    modal.classList.add("js-open-modal") ;

		    //show section
		    project = document.getElementById( '' + showProjectId + '' );
		    project.classList.add("js-show");



		  }); //end click-function
		} //end for loop


		// close button or close on cover-click
		closeBtn.addEventListener("click", function() {
			hideProject();
		});

		closePanel.addEventListener("click", function() {
			hideProject();
		});

	} //end if modal exists


var hideProject = function() {
	//remove shown project
	project.classList.remove("js-show");
	//close modal
	modal.classList.remove("js-open-modal");
}









		// ********** FADE OUT HERO IMAGE ********** //
		window.addEventListener('scroll', function() {


			// ********** TITLE IMAGES ********* //
			if ( document.getElementById('fade-img') ) {

				var fadeOutItem = document.getElementById('fade-img');
				var photoZIndex = fadeOutItem.style.zIndex;
				var scrolled = window.pageYOffset;

				//for first bit of scroll do all the things
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
			}



			// ************ ABOUT SECTION IMAGE ********** //
			if ( document.getElementById('fade-2') ) {

				var fadeImg = document.getElementById('fade-2');
			  var distanceToTop = fadeImg.getBoundingClientRect().top;

			  var opacityLevel = 0 + ( distanceToTop / 1000 );
			  fadeImg.style.opacity = opacityLevel;
			  fadeImg.style.transform = "translateY( " + ( distanceToTop / 3 ) + "px )";

			};


			// ***************** MENU ************** //
			if ( document.getElementById('menu') ) {
				var menu = document.getElementById('menu'); 
				
				if ( window.pageYOffset >= 66 ) {
						menu.classList.add("js-minimenu") ;
				} else {
						menu.classList.remove("js-minimenu") ;
				}
			};


		});
		// ********** END SCROLL STUFF ********** //



		var animateHTML = function () {
		  // only call scroll events every 100ms
		  var didScroll = false;
		  window.onscroll = doThisStuffOnScroll;
		  function doThisStuffOnScroll() {
		      didScroll = true;
		  }
		  setInterval( function() {
		      if ( didScroll ) {
		          didScroll = false;
		          // console.log('You scrolled');
		          checkPosition();
		          menuShow();
		      }
		  }, 5);


		 //show elements when on screen
    var elems,
      windowHeight;
    var init = function () {
      elems = document.getElementsByClassName('hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
    };
    var addEventHandlers = function () {
      window.addEventListener( 'resize', init );
    };
    //if hidden items have moved onto screen, then show
    var checkPosition = function () {
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= -75 ) {
          elems[i].className = elems[i].className.replace( 'hidden', 'fade-in-element' );
        }
      }
    };
    return {
      init: init
    };
  };
  animateHTML().init();











}()); // end 'use strict'



