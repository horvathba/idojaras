import React, { useState, useEffect } from "react";
import { fetchWeather } from "./api/fetchWeather";

import "./App.css";
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };

 





  return (
    <div className="main-container" style={{ height: "100vh", width: "100%" }}>
      <input
        type="text"
        className="search"
        placeholder="Type a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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


           <sup> <button> <img height="20" width="20"   src='https://www.pngitem.com/pimgs/m/522-5229528_transparent-background-instagram-heart-icon-hd-png-download.png' /> </button></sup>

 
        </div>
      )}
    </div>
  );
};

export default Weather;
