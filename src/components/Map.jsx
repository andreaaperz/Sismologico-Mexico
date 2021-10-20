import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

function Mapa() {
  return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[51.505, -0.09]}>
        </Marker>
      </MapContainer>
  );
}

export default Mapa; 