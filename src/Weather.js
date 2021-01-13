import React, { useState } from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import UpdatedDate from "./UpdatedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
    });
  }

  if (weatherData.ready) {
   return( 
    <div className="weather">
       <div className="weather-icon">
           <ReactAnimatedWeather
         icon= 'CLEAR_DAY'
         color= 'goldenrod'
         size= '100'
         animate= "true"
         />
       </div>
       <h2 >{Math.round(weatherData.temperature)}<span className="unit">°C |°F</span></h2>
       <h3 >{weatherData.city}</h3>
       <h4 className="text-capitalized">{weatherData.description}</h4>
       <h5><UpdatedDate date={weatherData.date} /></h5>
       <div className="row row-cols-1 row-cols-md-3 g-0">
     <div className="col">
    <div className="card">
        <ul>
          <li>Wind🌀:{Math.round(weatherData.wind)}km/h</li>
        </ul>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <ul>
          <li>Humidity💧:{weatherData.humidity}%</li>
        </ul>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <ul>
          <li>Pressure⏲:{weatherData.pressure}</li>
        </ul>
    </div>
  </div>
  </div>
    </div>
  );
  } else {
  const apiKey = "8faad2c6827a8ece72c2320ecccefbdb";
  let city = `stuttgart`;
  let units = `metric`;
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}