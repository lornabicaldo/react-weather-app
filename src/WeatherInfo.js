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
               <h4>{props.data.description}</h4>
             </div>
             <div className="col-3">
               <WeatherTemperature celsius={props.data.temperature} />
               <div className="minMaxTemp">{Math.round(props.data.minTemp)}°C<i class="fas fa-long-arrow-alt-down"></i> / <strong>{Math.round(props.data.maxTemp)}</strong>°C<i class="fas fa-long-arrow-alt-up"></i></div>
               <div className="feels-like"> Feels like: {Math.round(props.data.feelsLike)}°C</div>
             </div>
             <div className="col-3">
                <h3>{props.data.city}</h3>
             </div>
          </div>
          <ul>
           <li>Wind <i className="fas fa-wind"></i>: <strong>{Math.round(props.data.wind)}</strong>km/h</li>
           <li>Humidity💧: <strong>{props.data.humidity}</strong>%</li>
           <li>Pressure⏲: <strong>{props.data.pressure}</strong>mb</li>
          </ul>
    </div>
 );
}