import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <WeatherIcon code={props.data.icon} />
         <WeatherTemperature celsius={props.data.temperature} />
       <h3 >{props.data.city}</h3>
       <h4 className="text-capitalized">{props.data.description}</h4>
       <h5><UpdatedDate date={props.data.date} /></h5>
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