import React, { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import "./App.css";
import { Redirect } from 'react-router-dom';
 

 



const Asd = () => {
  var [kimenet, setKimenet] = useState("")
   const getElements = () => {
      for( var i=0; i< localStorage.length; i++){
        setKimenet(kimenet+=localStorage.getItem(localStorage.key(i)))}
   }

  return ( <div style={{
    textAlign: "center",
    fontSize: "20px",
    color:"red",
    
  }}>
    
       <button onClick={getElements}> Kedvencek listázása   </button>
       {kimenet.length > 0 && <div>{kimenet} </div>}  </div>
       )
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
       <Asd></Asd>


        <button onClick= {() => window.localStorage.clear()}> Kedvencek törlése </button>
        
      </div>


    );

    








  }
}
 
export default SimpleMap;