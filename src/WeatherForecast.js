import React, { useState } from "react";
import axios from "axios";
import WeatherForecastInfo from "./WeatherForecastInfo";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
     <div className="WeatherForecast row">
       <WeatherForecastInfo data={forecast.list[0]} />
       <WeatherForecastInfo data={forecast.list[1]} />  
       <WeatherForecastInfo data={forecast.list[2]} />  
       <WeatherForecastInfo data={forecast.list[3]} />  
       <WeatherForecastInfo data={forecast.list[4]} />  
     </div>
    );
  } else {
    let apiKey = "8faad2c6827a8ece72c2320ecccefbdb";
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}