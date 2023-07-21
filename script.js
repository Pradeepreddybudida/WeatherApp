
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
        else if(city=="hyderabad")
        {
        Cloud_pcthyderbad.innerHTML = response.cloud_pct
        temphyderbad.innerHTML = response.temp
        Humidityhyderbad.innerHTML = response.humidity
        min_temphyderbad.innerHTML = response.min_temp
        max_temphyderbad.innerHTML = response.max_temp
        Wind_speedhyderbad.innerHTML = response.wind_degrees
        Wind_degreeshyderbad.innerHTML = response.wind_degrees
        Sunrisehyderbad.innerHTML = response.sunrise
        Sunsethyderbad.innerHTML = response.sunset
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
        else if(city=="jalandhar")
        {
        Cloud_pctjalandhar.innerHTML = response.cloud_pct
        tempjalandhar.innerHTML = response.temp
        Humidityjalandhar.innerHTML = response.humidity
        min_tempjalandhar.innerHTML = response.min_temp
        max_tempjalandhar.innerHTML = response.max_temp
        Wind_speedjalandhar.innerHTML = response.wind_degrees
        Wind_degreesjalandhar.innerHTML = response.wind_degrees
        Sunrisejalandhar.innerHTML = response.sunrise
        Sunsetjalandhar.innerHTML = response.sunset
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
getweather("hyderabad")
getweather("chennai")
getweather("jalandhar")
getweather("lucknow")
