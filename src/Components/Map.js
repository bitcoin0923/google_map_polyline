import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <h3>{text}</h3>;

export default function SimpleMap(){
  const defaultProps = {
    center: {"lat":41.1288079,"lng":-82.2601556},
    zoom: 20
  };
  const coords = [{"lat":41.1285422,"lng":-82.2603989},{"lat":41.1285732,"lng":-82.2603986},{"lat":41.128604,"lng":-82.2603772},{"lat":41.1286407,"lng":-82.260337},{"lat":41.1286727,"lng":-82.260299},{"lat":41.1287631,"lng":-82.2602093},{"lat":41.1288079,"lng":-82.2601556},{"lat":41.1288378,"lng":-82.2601132},{"lat":41.1288668,"lng":-82.2601012},{"lat":41.1288978,"lng":-82.2600969},{"lat":41.12892,"lng":-82.2600567},{"lat":41.1289182,"lng":-82.2600185},{"lat":41.1289187,"lng":-82.2599136},{"lat":41.1289227,"lng":-82.2598195},{"lat":41.1289399,"lng":-82.2597635},{"lat":41.1289527,"lng":-82.2597292}];

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects

  
     let electricLine = new maps.Polyline({
      path: coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    electricLine.setMap(map);
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDAuf85UWARPfkF9AarfzovDvUzuTDkR6w" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        
      >
        {/* {
          coords.map((coord, index) => {
            return <AnyReactComponent
              lat={coord.lat}
              lng={coord.lng}
              text="O"
            /> 
          })
        } */}
      </GoogleMapReact>
    </div>
  );
}