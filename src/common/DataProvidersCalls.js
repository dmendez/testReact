

const baseUrl = 'http://apps5.genexus.com/Idf4576a6f5b3608c3059b0da155c3dfe4/rest/';

function webExecute(method, query, data) {
	const url = baseUrl + query;
	var headers = new Headers({
		'Accept-Language':'en-US',
		'Content-Type': 'application/json'
	});


	//https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
	const options = {
		method: method,
		headers: headers,
		mode: 'cors',
		body: data
	}

	console.log(method + ':' + url);
	if (data)
		console.log(data);

	return fetch(url, options)
		.then(response => {
			if (response.ok)
				return response.json();
			else
				return response;
		});
}


export default webExecute;