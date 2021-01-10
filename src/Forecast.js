import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Forecast.css";

export default function Forecast() {
    return(
        <div className="row weather-forecast">
            <div className="col-2">
                <h6>Mon</h6>
                 <div className="forecast-icon">
                   <ReactAnimatedWeather
                     icon= 'CLEAR_DAY'
                     color= 'yellow'
                     size= '40'
                     animate= 'true'
                   />
                </div>
                <div className="weather-forecast-temperature">
                    <strong>10°</strong>|8°
                </div>
            </div>
            <div className="col-2">
                <h6>Tue</h6>
                 <div className="forecast-icon">
                   <ReactAnimatedWeather
                     icon= 'PARTLY_CLOUDY_DAY'
                     color= '#00917c'
                     size= '40'
                     animate= 'true'
                   />
                </div>
                <div className="weather-forecast-temperature">
                    <strong>8°</strong>|5°
                </div>
            </div>
            <div className="col-2">
                <h6>Wed</h6>
                 <div className="forecast-icon">
                   <ReactAnimatedWeather
                     icon= 'SNOW'
                     color= '#f6ecf0'
                     size= '40'
                     animate= 'true'
                   />
                </div>
                <div className="weather-forecast-temperature">
                    <strong>5°</strong>|-1°
                </div>
            </div>
            <div className="col-2">
                <h6>Thu</h6>
                 <div className="forecast-icon">
                   <ReactAnimatedWeather
                     icon= 'WIND'
                     color= '#045762'
                     size= '40'
                     animate= 'true'
                   />
                </div>
                <div className="weather-forecast-temperature">
                    <strong>7°</strong>|6°
                </div>
            </div>
            <div className="col-2">
                <h6>Fri</h6>
                 <div className="forecast-icon">
                   <ReactAnimatedWeather
                     icon= 'FOG'
                     color= '#a685e2'
                     size= '40'
                     animate= 'true'
                   />
                </div>
                <div className="weather-forecast-temperature">
                    <strong>6°</strong>|5°
                </div>
            </div>
            <div className="col-2">
                <h6>Sat</h6>
                 <div className="forecast-icon">
                   <ReactAnimatedWeather
                     icon= 'SLEET'
                     color= '#ea97ad'
                     size= '40'
                     animate= 'true'
                   />
                </div>
                <div className="weather-forecast-temperature">
                    <strong>8°</strong>|7°
                </div>
            </div>
        </div>
    )
}