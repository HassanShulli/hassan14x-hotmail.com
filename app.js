const got = require('got');
 
const validUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
const inValidUrl = 'https://api.nasa.gov/planetary/apodinvalid';

getData(validUrl);
getData(inValidUrl);

function getData(requestUrl) {
	got(requestUrl).then(response => {
	  if (response) {
	  	console.log('Response Code : 200');
	  }
	}).catch(error => {
	  	console.log('Response Code : 500. The following url is invalid : ', requestUrl);
	});
}