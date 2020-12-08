import React, { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import "./App.css";
import { Redirect } from 'react-router-dom';
import Marker from './Marker.js';
import "./Marker.css";
import {getGeocode,getLatLng} from "use-places-autocomplete";



const RenderItems = () =>{

    const keys= Object.keys(window.localStorage);
    const values= Object.values(window.localStorage);
    const obj =[];
    const varos="Algonquin Park, ON, Canada";
  for(var i=0; i<window.localStorage.length; i++)
  {
    if(keys[i]!="theme"){
    obj[i]={key:keys[i],value:values[i]};
    }
  }
return (
    <ul>
      {obj.map(elements => (  
        <li key={elements.key} onClick={async()=>{ 
          const result = await getGeocode("Algonquin Park, ON, Canada");
          const{lat,lng}= await getLatLng(result[0]);
          console.log(lat,lng);
        }}> {elements.value}</li>
      ))}
    </ul>
  );
}
const Asd = () => {
  var [kimenet, setKimenet] = useState(false)
  var seged=[];
   const getElements = () => {
      if(kimenet){
      setKimenet(false);
      }
      else{
      setKimenet(true);
      }
   }
   
   
  return ( <div style={{
    textAlign: "center",
    fontSize: "20px",
    color:"red",
    
  }}>
    
       <button onClick={getElements}> Kedvencek listázása   </button>
       {kimenet && RenderItems()}  </div>
       )
  }

  

 //hol kezdjen
class SimpleMap extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedCity:"",
    };
  }
  static defaultProps = {
    center: {
      lat: 47.5,
      lng: 19.0
    },
    zoom: 11,
  };
  
 
  render() {
    return (
      <div className="main-container" style={{  border:'10px', padding:'70px',
      height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDfCia8N_krLsubetZ8OFC9PjL8fflR0sU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
          
        >
 <Marker 
          lat={47.5}  //ezamarker
            lng={19.0}
            name="My Marker"
            color="black"

          
        
          />
        </GoogleMapReact>
       <Asd> </Asd>
       
     

        <button onClick= {() => window.localStorage.clear()}> Kedvencek törlése </button>
        
      </div>


    );

    








  }
}


export default SimpleMap;