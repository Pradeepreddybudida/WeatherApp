
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather =(city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        Cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        Humidity.innerHTML = response.humidity
        Humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        Wind_speed.innerHTML = response.wind_degrees
        Wind_speed2.innerHTML = response.wind_degrees
        Wind_degrees.innerHTML = response.wind_degrees
        Sunrise.innerHTML = response.sunrise
        Sunset.innerHTML = response.sunset

        
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value);
})
getweather("delhi")