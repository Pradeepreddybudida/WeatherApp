
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather =(city)=>{
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        if(city=="delhi"){
            cityName.innerHTML = city
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
        }
        else if(city=="pune")
        {
        Cloud_pctpune.innerHTML = response.cloud_pct
        temppune.innerHTML = response.temp
        Humiditypune.innerHTML = response.humidity
        min_temppune.innerHTML = response.min_temp
        max_temppune.innerHTML = response.max_temp
        Wind_speedpune.innerHTML = response.wind_degrees
        Wind_degreespune.innerHTML = response.wind_degrees
        Sunrisepune.innerHTML = response.sunrise
        Sunsetpune.innerHTML = response.sunset
        }
        else if(city=="mumbai")
        {
        Cloud_pctmumbai.innerHTML = response.cloud_pct
        tempmumbai.innerHTML = response.temp
        Humiditymumbai.innerHTML = response.humidity
        min_tempmumbai.innerHTML = response.min_temp
        max_tempmumbai.innerHTML = response.max_temp
        Wind_speedmumbai.innerHTML = response.wind_degrees
        Wind_degreesmumbai.innerHTML = response.wind_degrees
        Sunrisemumbai.innerHTML = response.sunrise
        Sunsetmumbai.innerHTML = response.sunset
        }
        else if(city=="kolkota")
        {
        Cloud_pctkolkota.innerHTML = response.cloud_pct
        tempkolkota.innerHTML = response.temp
        Humiditykolkota.innerHTML = response.humidity
        min_tempkolkota.innerHTML = response.min_temp
        max_tempkolkota.innerHTML = response.max_temp
        Wind_speedkolkota.innerHTML = response.wind_degrees
        Wind_degreeskolkota.innerHTML = response.wind_degrees
        Sunrisekolkota.innerHTML = response.sunrise
        Sunsetkolkota.innerHTML = response.sunset
        }
        else if(city=="chennai")
        {
        Cloud_pctchennai.innerHTML = response.cloud_pct
        tempchennai.innerHTML = response.temp
        Humiditychennai.innerHTML = response.humidity
        min_tempchennai.innerHTML = response.min_temp
        max_tempchennai.innerHTML = response.max_temp
        Wind_speedchennai.innerHTML = response.wind_degrees
        Wind_degreeschennai.innerHTML = response.wind_degrees
        Sunrisechennai.innerHTML = response.sunrise
        Sunsetchennai.innerHTML = response.sunset
        }
        else if(city=="botsan")
        {
        Cloud_pctbotsan.innerHTML = response.cloud_pct
        tempbotsan.innerHTML = response.temp
        Humiditybotsan.innerHTML = response.humidity
        min_tempbotsan.innerHTML = response.min_temp
        max_tempbotsan.innerHTML = response.max_temp
        Wind_speedbotsan.innerHTML = response.wind_degrees
        Wind_degreesbotsan.innerHTML = response.wind_degrees
        Sunrisebotsan.innerHTML = response.sunrise
        Sunsetbotsan.innerHTML = response.sunset
        }
        else if(city=="lucknow")
        {
        Cloud_pctlucknow.innerHTML = response.cloud_pct
        templucknow.innerHTML = response.temp
        Humiditylucknow.innerHTML = response.humidity
        min_templucknow.innerHTML = response.min_temp
        max_templucknow.innerHTML = response.max_temp
        Wind_speedlucknow.innerHTML = response.wind_degrees
        Wind_degreeslucknow.innerHTML = response.wind_degrees
        Sunriselucknow.innerHTML = response.sunrise
        Sunsetlucknow.innerHTML = response.sunset
        }
        
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value);
})
getweather("delhi")
getweather("pune")
getweather("mumbai")
getweather("kolkota")
getweather("chennai")
getweather("botsan")
getweather("lucknow")
