import React, { useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, CircleMarker } from 'react-leaflet';

const data = require('../assets/csvjson.json');

const colorMark = (mag) => {
  var colorDev = '';
  switch (mag) {
    case 0 - 3:
      colorDev = 'red'
      break;
    case 3 - 6:
      colorDev = 'blue'
      break
    case 6 - 10:
      colorDev = 'red'
      break;
    default:
      colorDev = 'black'
      break;
  }
  return colorDev;
}

const Mapa = () => {
  const [markers, setMarkers] = useState(data);
  return (
    <MapContainer center={[22, -102]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map(marker => {
        return (
          <CircleMarker center={[marker.Latitud, marker.Longitud]} pathOptions={colorMark([marker.Magnitud])} radius={[marker.Magnitud * 5]}>
            <Popup>
              {marker["Referencia de localizacion"]} <br /> Profundidad : {marker.Profundidad}
            </Popup>
          </CircleMarker>
        )
      })}
    </MapContainer>

  );
}



export default Mapa;