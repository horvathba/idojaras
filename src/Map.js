import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";
import { Redirect } from "react-router-dom";
import Marker from "./Marker.js";
import "./Marker.css";
import Geocode from "react-geocode";

//hol kezdjen
class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: "",
      canShow: false,
      cityCoords: {
        selectedCityLng: -1,
        selectedCityLat: -1,
      },
      kimenet: false,
    };
    Geocode.setApiKey("AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU");
  }
  static defaultProps = {
    center: {
      lat: 47.5,
      lng: 19.0,
    },
    zoom: 11,
  };

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
          height: "100vh",
          width: "100%",
          display: "flex",
          flexdirection: "row",
        }}
      >
        <div style={{ height: "80%", width: "50%", display: "flex" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
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
            padding: "20px",
            flexDirection: "row",
            justifyContent: "right",
            textAlign: "right",
            fontSize: "26px",
            color: "black",
            height: "80%",
            width: "50%",
          }}
        >
          <button onClick={this.getElements}> Kedvencek listázása </button>
          {this.state.kimenet && this.RenderItems(this.state)}{" "}
          <button onClick={() => window.localStorage.clear()}>
            {" "}
            Kedvencek törlése{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
