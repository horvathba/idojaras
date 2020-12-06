import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherScreen from "./Weather";
import MapScreen from "./Map";
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
          <div style={{ display: "inline-block", paddingRight: "10%" }}>
            <Link
              to="/weather"
              
            >
              <img  height="90" width="115" src="https://sallaigabor.hu/wp-content/uploads/2018/01/new-google-maps-icon-logo-263A01C734-seeklogo.com_.png"></img>
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
        height: "100%",
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
