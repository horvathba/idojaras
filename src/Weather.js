import React, { useState,  createContext, useContext, useReducer  } from "react";
import { fetchWeather } from "./api/fetchWeather";
import {Context,GlobalStateProvider,Counter} from './GlobalContext.js';


import "./App.css";







const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [gomb,setGomb]= useState(false);
  var [id, setId]=useState(window.localStorage.length);
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");



    }


  }

  const SaveToFav =() =>
  {
    var i=0;
    var van=false;
    
    while(i < localStorage.length && !van)
    {
      if( window.localStorage.getItem(i) === weather.name){
        van=true;
      }
      i++;
    }
    if(van){

      alert("Ez a varos mar a kedvencekbe van");
    }
    else{
      window.localStorage.setItem(id,weather.name);
      setId(id+1);
    }
    
  }



  return (
    <div className="main-container" style={{ height: "100vh", width: "100%" }}>
      <input
        type="text"
        className="search"
        placeholder="Type a city..."
        value={query}
        onChange={(e) => {setQuery(e.target.value);
          
        }}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
            
          </div>


           <sup>   <button className="buttonx " onClick={SaveToFav} disabled={gomb}> <img height="20" width="20"   src='https://listimg.pinclipart.com/picdir/s/197-1977283_heart-shape-png-transparent-www-pixshark-com-images.png' /> </button></sup>
 
 
           <GlobalStateProvider>
<Counter name="counter2" />
</GlobalStateProvider>
 
        </div>
      )}

    </div>
  );
};

export default Weather;
