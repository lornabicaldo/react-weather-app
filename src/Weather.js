import React, { useState } from "react";
import axios from "axios";
 import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
    });
  }
  
  function search() {
  const apiKey = "8faad2c6827a8ece72c2320ecccefbdb";
  
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
   return( 
      <div className="weather">
      <div className="search-form">
            <form onSubmit={handleSubmit}>
             <div className="row">
             <div className="col-6">
             <input type="Search" placeholder="Search a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
             <button type="submit"><i className="fas fa-search-location"></i></button> 
             </div>
             </div>
            </form>
        </div>
   <WeatherInfo data={weatherData} />
   <WeatherForecast city={weatherData.city} />
    </div>
  );
  } else {
    search();
  return ( 
      <Loader
         type="Bars"
         color="#00BFFF"
         height={100}
         width={100}
      />
  );
  }
}