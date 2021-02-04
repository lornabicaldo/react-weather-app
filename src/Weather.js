import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherAnimatedClouds from "./WeatherAnimatedClouds";
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

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "8faad2c6827a8ece72c2320ecccefbdb"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`; 

    axios.get(apiUrl).then(handleResponse); 
  }

  function handleButton(event) {
    event.preventDefault();
    searchLocation();
  }

  if (weatherData.ready) {
   return( 
    <div className="Weather">
      <div className="search-form">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
             <input type="Search" placeholder="Search a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
             <button type="submit" className="button-search"><i className="fas fa-search-location"></i></button> 
            </form>
          </div>
          <div className="col-3">
              <button type="button"className="btn btn-success rounded-circle ml-1" onClick={getCurrentLocation}> 
              📍 
              </button> 
          </div>
        </div>
      </div>
   <WeatherAnimatedClouds />     
   <WeatherInfo data={weatherData} />
   <WeatherForecast city={weatherData.city} />
   </div>
  );
  } else {
    search();
  return ( 
    <div className="loader">
      <Loader
         type="Bars"
         color="#00BFFF"
         height={100}
         width={100}
      />
    </div>
  );
  }
}