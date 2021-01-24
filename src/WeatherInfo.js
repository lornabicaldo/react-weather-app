import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";



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
             <div className="col-4">
                <h3 >{props.data.city}</h3>
             </div>
          </div>
          <ul>
           <li>Wind <i className="fas fa-wind"></i>: {Math.round(props.data.wind)}km/h</li>
           <li>Humidity💧: {props.data.humidity}%</li>
           <li>Pressure⏲: {props.data.pressure}</li>
          </ul>
    </div>
 );
}