//задача в соответствии с первым вариантом

const WEATHER_API_TOKEN = 'd8ae03d237fa1e4a94aa2e3b69c5274c';

async function getWeatherByCity(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_TOKEN}&units=metric`;

    try {
        let res = await fetch(URL);

        if (res.status >= 400) throw new Error('такого города не существует');
        else {
            let json = await res.json();
            console.log(`температура: ${json.main.feels_like}°C влажность: ${json.main.humidity}% давление: ${json.main.pressure}hPa ветер: ${json.wind.speed}km/h`);
        }
    }
    catch (err) {
        console.log(`ошибка: ${err.message}`)
    }
}
    

getWeatherByCity('minsk');