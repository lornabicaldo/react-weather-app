import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";

export default function Weather() {
    return( 
    <div className="weather">
       <div className="weather-icon">
           <ReactAnimatedWeather
         icon= 'CLEAR_DAY'
         color= 'goldenrod'
         size= '100'
         animate= 'true'
         />
       </div>
       <h2 >32°</h2>
       <h3 >Valleta</h3>
       <h4 >Sunny</h4>
       <h5>Sun, Jan. 10, 2021</h5>
       <div className="row row-cols-1 row-cols-md-3 g-0">
     <div className="col">
    <div className="card">
        <ul>
          <li>Wind🌀:78km/p</li>
        </ul>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <ul>
          <li>Humidity💧:89%</li>
        </ul>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <ul>
          <li>Pressure⏲:1022mb</li>
        </ul>
    </div>
  </div>
  </div>
    </div>
    );
}