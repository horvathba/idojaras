import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 




 
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
      <div style={{ height: '100vh', width: '100%' }}>
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