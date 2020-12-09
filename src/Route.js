import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherScreen from "./Weather";
import MapScreen from "./Map";
import "./App.css";


function Navi() {
  return (
    <Router>
      <div>
        <div
          style={{
            textAlign: "center",
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div style={{ display: "inline-block",  paddingRight: "20%" }}>
            <Link
              to="/weather"
              
            >
              <img   height="90" width="115" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
            </Link>
          </div>
          <div style={{ display: "inline-block"  }}>
           
            <Link 
              to="/map" 

            >
               <img height="90" width="115" src="https://seeklogo.com/images/G/google-maps-icon-2020-logo-4A2A66D31F-seeklogo.com.png" />

            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Weather() {
  return <WeatherScreen> </WeatherScreen>;
}







function Map() {
  return (
    <div
    style={{
      height: '10%'   ,
      display: "flex",
      justifycontent: "center",
      alignitems: "center",
      flexdirection: "column",
    }}
    >
      
      <MapScreen></MapScreen>
    </div>
  );
}

export default Navi;
