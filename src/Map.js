import React, { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import "./App.css";
import { Redirect } from 'react-router-dom';
import List from 'react-list-select';
import Marker from './Marker.js';
import "./Marker.css";


//idecsakbebasztam 



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
       {kimenet && <List
    items={Object.values(localStorage)}
    selected={[0]}
    onChange={(selected: number) => {console.log(selected)} }
  />}  </div>
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
 <Marker 
          lat={47.5}
            lng={19.0}
            name="My Marker"
            color="black"
//background={{url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'}}
          
        
          />
        </GoogleMapReact>
       <Asd> </Asd>
       
     

        <button onClick= {() => window.localStorage.clear()}> Kedvencek törlése </button>
        
      </div>


    );

    








  }
}


export default SimpleMap;