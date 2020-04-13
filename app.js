const got = require('got');
 
const validUrl = 'https://gorest.co.in/public-api/users?_format=json&access-token=2yXEckr1AWV1LTyZKgNwzQj9_xym5N33161Y';
const inValidUrl = 'https://gorest.co.in/public-api/userss?_format=json&access-token=2yXEckr1AWV1LTyZKgNwzQj9_xym5N33161Y';

getData(validUrl);
getData(inValidUrl);

getData(validUrl).then((res) => {
	console.log(res);
})

getData(inValidUrl).then((res) => {
	console.log(res);
})

function getData(requestUrl) {
	return new Promise(function(resolve, reject) {
		got(requestUrl).then(response => {
			let result = JSON.parse(response.body);
			console.log('response status : ', result._meta.success);
			if (result._meta.success) {
				return resolve(result._meta.code)
			} else {
				return reject(new Error('statusCode=' + result._meta.code));
			}
		}).catch(error => {
		return reject(error);
	})
	})
}