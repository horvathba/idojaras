import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./App.css";
 

 



  const asd = () => {
    var kimenet='';
    for( var i=0; i< localStorage.length; i++){
    kimenet+=localStorage.getItem(localStorage.key(i))}
    return (<div>kimenet</div>)
    }


 //hol kezdjen
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.5,
      lng: 19.0
    },
    zoom: 11
  };
   arrayOfValues = Object.values(localStorage);




 
  render() {
    return (
      <div className="main-container" style={{  border:'10px', padding:'70px',
      height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
        </GoogleMapReact>

       <div> <button onClick = {() => window.localStorage.getItem('favourite')}> Kedvencek listázása   </button>  </div>
        <button onClick= {() => window.localStorage.clear()}> Kedvencek törlése </button>
      </div>


    );

    








  }
}
 
export default SimpleMap;