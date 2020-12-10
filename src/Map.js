import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";
import { Redirect } from "react-router-dom";
import Marker from "./Marker.js";
import "./Marker.css";
import Geocode from "react-geocode";
import ReactStars from "react-rating-stars-component";














//hol kezdjen
class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this._map = null;
    this.state = {
      selectedCity: "",
      canShow: false,
      cityCoords: {
        selectedCityLng: -1,
        selectedCityLat: -1,
      },
      kimenet: false,
      zoomLevel: 9,
      center: {
        lat: 47.5,
        lng: 19.0,
      },
    };
    Geocode.setApiKey("AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU");
  }

  getElements = () => {
    if (this.state.kimenet) {
      this.setState({
        kimenet: false,
      });
    } else {
      this.setState({
        kimenet: true,
      });
    }
  };
  RenderItems = (state) => {
    const keys = Object.keys(window.localStorage);
    const values = Object.values(window.localStorage);
    const obj = [];
    for (var i = 0; i < window.localStorage.length; i++) {
      if (keys[i] != "theme") {
        obj[i] = { key: keys[i], value: values[i] };
      }
    }
    return (
      <ul style={{ liststyle: "none", padding: 0, margin: 0 }}>
        {obj.map((elements) => (
          <li
            key={elements.key}
            onClick={async () => {
              Geocode.fromAddress(elements.value).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  this.setState({
                    selectedCity: elements.value,
                    cityCoords: {
                      selectedCityLng: lng,
                      selectedCityLat: lat,
                     
                    },
                    canShow: true,
                     center:{
                       lat:lat,
                       lng:lng,
                     }
                  });
                },
                (error) => {
                  console.error(error);
                }
              );
            }}
          >
            {elements.value}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div
        style={{
          padding:50,
          height: "80vh",
          width: "100%",
          display: "flex",
          flexdirection: "row",
          
        }}
      >
        <div style={{ height: "80%", width: "50%", display: "flex", border: "10px dashed"}}>
          
          <GoogleMapReact
            ref="map"
            bootstrapURLKeys={{
              key: "AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU",
            }}
            zoom={this.state.zoomLevel}
            center={this.state.center}
          >
            {this.state.canShow && (
              <Marker
                lat={this.state.cityCoords.selectedCityLat}
                lng={this.state.cityCoords.selectedCityLng}
                name="My Marker"
                color="black"
                
              ></Marker>
              
            )}
          </GoogleMapReact>
        </div>
        
        <div
          style={{
            padding: "30px",
            flexDirection: "row",
            justifyContent: "right",
            textAlign: "right",
            fontSize: "26px",
            color: "black",
            height: "20%",
            width: "50%",
            
          }}
        >
          <div style={{textAlign: "left", fontSize:"20px"}}>Rate my app</div>
       <div style={{padding: "20px", textAlign: "right"}}><ReactStars></ReactStars> </div>
          <button className="button" onClick={this.getElements}> Kedvencek listázása </button>
          {this.state.kimenet && this.RenderItems(this.state)}
          <button  className ="button" onClick={() =>{ window.localStorage.clear();
             this.setState({kimenet:false})}}>
            -Kedvencek   törlése-
          </button>
          
        

        </div>

      </div>

      
    );


  







  }
  
}




export default SimpleMap;