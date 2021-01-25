import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
         <Weather defaultCity="Valletta"/>
          <footer>
            <small>Built by: Lorna Bicaldo </small>
              <span className="links">
                <a href="https://github.com/lornabicaldo/react-weather-app" rel="noreferrer" target="_blank">
                 <i className="fab fa-github"></i></a>
                 <a href="https://angry-beaver-14d013.netlify.app/" rel="noreferrer" tarfet="_blank">
                 <img src="https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/netlify/netlify-squarelogo.png" 
                  alt="netlify" width="20" height="20" />
               </a>
             </span> 
         </footer>
     </div>
    </div>
  );
}


