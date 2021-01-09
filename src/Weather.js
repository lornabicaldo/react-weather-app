import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";

export default function Weather() {
    return( 
    <div className="weather">
       <div className="icon">
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
       <div className="row row-cols-1 row-cols-md-3 g-0">
     <div className="col">
    <div className="card h-10 w-10">
      <div className="card-body">
        <h5 >78</h5>
        <h5 >🌬</h5>
        <h5 >Wind Blow</h5>
      </div>
    </div>
  </div>
  </div>
    </div>
    );
}