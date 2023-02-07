import './../styles/css/main.css';
// import React from 'react';

// function Mapa() {
//   return (
//     <div className='map-area'>
//       mapa
//     </div>
//   )
// }

// export default Mapa

// API google maps: AIzaSyDuj1zTOb2Tb8JDPZjgo9FbI7wnKbGQa70

import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '350px'
};

const center = {
  lat: 40.3984013,
  lng: -3.6866354
};
const Mapa = ()=>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAet8Mk1nPvOn_AebLE5ZxXoGejOD8tPzA"
})

const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return (
    <div className='map-area'>
      {/* <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18} onLoad={onLoad} onUnmount={onUnmount}></GoogleMap> */}
      {isLoaded ? <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} onLoad={onLoad} onUnmount={onUnmount}><></></GoogleMap> :<></>}
    </div>
  )  
}

export default Mapa;