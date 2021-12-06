import React, { useState, useMemo } from "react";
import { MapContainer, Rectangle, LayersControl, TileLayer, Popup, Marker, CircleMarker } from 'react-leaflet';
import '../sass/map.scss';



const data = require('../assets/csvjson.json');
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }

const Mapa = () => {
  //const [gran, setGran] = useState([])
  const [markers] = useState(data);
  const [tipoMapa, setTipoMapa] = useState(0); //Iniiccalizas variable.
  if(tipoMapa === 0){
    return (
      MapaMarker(markers)
    ); 
  } else {
    return (
      MapaCircleMarker(markers)
    );
  }

  function MapaMarker(markers) {
    return (
      <MapContainer center={[22, -102]} zoom={5} scrollWheelZoom={true}>
        <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>  
        </LayersControl>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map(marker => {
          return (
            <Marker position={[marker.Latitud, marker.Longitud]}>
              <Popup>              
                <div>
              <div class="">           
                    <h6>{marker["Referencia de localizacion"]}</h6>
                    <p>Fecha: {marker["Fecha"]} Hora {marker["Hora"]}</p>
                    <p>Magnitud: {marker["Magnitud"]}</p>
                    <p>Profundidad: {marker["Profundidad"]}</p>                   
                    <p>Estatus: {marker["Estatus"]}</p>
                </div>  
              </div>
              </Popup>
            </Marker>
          )
        })}
        <div id="vidtop-content">
      <div class="vid-info">        
            <h1>Tipo de mapa</h1>
            <div class="group">
              <input type="radio" onClick={() => setTipoMapa(1)} name="rb" id="rb1" />
              <label for="rb1">Áreas</label>
              <input type="radio" onClick={() => setTipoMapa(0)} name="rb" id="rb2" />
              <label for="rb2">Markers</label>
            </div>
        </div>
      </div>
      </MapContainer>
    );
  }
  
  function MapaCircleMarker(markers) {
    return (
      <MapContainer center={[22, -102]} zoom={5} scrollWheelZoom={true}>  
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>  
        </LayersControl>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map(marker => {
          return (
            <CircleMarker center={[marker.Latitud, marker.Longitud]} pathOptions={[redOptions]} radius={[marker.Magnitud*5]}>
              <Popup>              
                <div id="">
              <div class="">           
                    <h6>{marker["Referencia de localizacion"]}</h6>
                    <p>Fecha: {marker["Fecha"]} Hora {marker["Hora"]}</p>                    
                    <p>Magnitud: {marker["Magnitud"]}</p>
                    <p>Profundidad: {marker["Profundidad"]}</p>     
                    <p>Estatus: {marker["Estatus"]}</p>              
                </div>  
              </div>
              </Popup>
            </CircleMarker>
          )
        })}
        <div id="vidtop-content">
      <div class="vid-info">        
            <h1>Elige un tipo de mapa</h1>
            <div class="group">
              <input type="radio" onClick={() => setTipoMapa(1)} name="rb" id="rb1" />
              <label for="rb1">Áreas</label>
              <input type="radio" onClick={() => setTipoMapa(0)}  name="rb" id="rb2" />
              <label for="rb2">Markers</label>
            </div>
        </div>
      </div>
      </MapContainer>
    );
  }
}

export default Mapa;