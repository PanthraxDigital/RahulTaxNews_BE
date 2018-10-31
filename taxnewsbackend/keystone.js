// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	"name": 'TaxNewsBackend',
	"brand": 'TaxNewsBackend',
	"sass": 'public',
	"static": 'public',
	"favicon": 'public/favicon.ico',
	"views": 'templates/views',
	'view engine': '.hbs',
	'cookie secret': 'e6f367201256d6b6959f222754a4ab27',
	'cloudinary config':
		'cloudinary://634379696918432:cV3z-u5CGfRkN2xbyzsyzdRy64w@taxknowledge', // info@taxknowledge.in
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	"emails": 'templates/emails',
	'auto update': true,
	"session": true,
	"auth": true,
	'user model': 'User',
	"port": 4002,
});
keystone.set('signin logo', '../PDA_logo.png');

keystone.set('cors allow origin', true);
// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	WriteArticle: 'Articles',
	Analytics: [
		{
			label: 'Analytics',
			key: 'Analytics',
			path:
				'https://analytics.google.com/analytics/web/?authuser=3#/report-home/a126288310w184968798p182262586',
		},
	],
	Newsletter: [
		{
			label: 'NewsLetter',
			key: 'NewsLetter',
			path:
				'https://login.mailchimp.com/?referrer=%2F%3F_ga%3D2.61668140.1290825636.1540977765-73805725.1540977765&wcookie=8a925d3cbca88068363d',
		},
	],
});

// Start Keystone to connect to your database and initialise the web server

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log(
		'----------------------------------------'
			+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
			+ '\n----------------------------------------'
			+ '\nYou have opted into email sending but have not provided'
			+ '\nmailgun credentials. Attempts to send will fail.'
			+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
			+ '\nset up your mailgun integration'
	);
}

keystone.start();
