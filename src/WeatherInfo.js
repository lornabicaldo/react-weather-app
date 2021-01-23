import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
         <h5><UpdatedDate date={props.data.date} /></h5>
         <div className="row">
           <div className="col-4">
         <WeatherIcon code={props.data.icon} />
         <h4 >{props.data.description}</h4>
         </div>
         <div className="col-3">
         <WeatherTemperature celsius={props.data.temperature} />
          <p className="minMaxTemp">{Math.round(props.data.minTemp)}/{Math.round(props.data.maxTemp)}°C</p>
          <p className="feels-like"> feels like: {Math.round(props.data.feelsLike)}°C</p>
         </div>
         <div className="col-3">
         <h3 >{props.data.city}</h3>
         </div>
         </div>
       <div className="row row-cols-1 row-cols-md-3 g-1">
     <div className="col">
    <div className="card">
        <ul>
          <li>Wind <i className="fas fa-wind"></i><br /> {Math.round(props.data.wind)}km/h</li>
        </ul>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <ul>
          <li>Humidity💧 {props.data.humidity}%</li>
        </ul>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <ul>
          <li>Pressure⏲ {props.data.pressure}</li>
        </ul>
    </div>
  </div>
  </div>
  </div>
 );
}