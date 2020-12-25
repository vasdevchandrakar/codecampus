const request = require('request');
const apiUrlWeatherStack = 'http://api.weatherstack.com/current?access_key=45c59e05a2e62a65eab23b30cf88cf96&query=bhilai';
const apiUrlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Nehru%20Nagar%20East%20Bhilai.json?access_token=pk.eyJ1IjoidmFzdTIyIiwiYSI6ImNrajQ5eGNxZjN0ZXkyeW40aGx2c2R2dHQifQ.En-W4fSUJgvz3QpxLOvRzA';

request({url : apiUrlWeatherStack, json : true}, (error,response) => {
	
	if(error){
		console.log(error);
		console.log('Unable to find website');
	}else if(response.body.error){
		console.log(response.body.error.info);
	}else if(response.body.current){
		const responseBody = response.body.current;
		console.log(`
		Weather Description : ${responseBody.weather_descriptions[0]}
		Temprature : ${responseBody.temperature}
		`);
	}else{
		console.log('Invalid Output');
	}
});


request({url : apiUrlMapBox, json : true}, (error,response) => {
	
	
		console.log(`
		Latitude : ${response.body.features[2].center[0]}
		Longitude : ${response.body.features[2].center[1]}
		
		`);
	
});

