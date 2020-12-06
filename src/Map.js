import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./App.css";
 




 //hol kezdjen
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.5,
      lng: 19.0
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="main-container" style={{  border:'10px', padding:'70px',
      height: '70vh', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>

      </div>

    
    );

    








  }
}
 
export default SimpleMap;