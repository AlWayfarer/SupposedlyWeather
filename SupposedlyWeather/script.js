const param = {
	"url" : "http://api.openweathermap.org/data/2.5/",
	"appid" : "c2c0d1c397887909c0025bd0185f671a"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&APPID=${param.appid}&lang=ru`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data);
    let tempr = Math.round(data.main.temp - 273) + '&deg;';

    let speed = data.wind.speed + ' ' + '(м/с) or (mps)';

    let press = data.main.pressure + ' ' + 'мм.рт.ст';

    let humm = data.main.humidity + ' '+ '%';
    
    let wea = data.weather[0].description;

    if((data.main.temp - 273) < 10){
        tempr = ' ' + tempr;
    }

    document.querySelector('.tempr').innerHTML = tempr;

    document.querySelector('.speed').innerHTML = speed;

    document.querySelector('.press').innerHTML = press;

    document.querySelector('.humm').innerHTML = humm;

    document.querySelector('.wea').innerHTML = wea;

    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`
}

getWeather();
document.querySelector('#city').onchange = getWeather;