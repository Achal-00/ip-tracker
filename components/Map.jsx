"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";

const Map = (props) => {
  const position = [props.latitude, props.longitude];

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerPosition latitude={props.latitude} longitude={props.longitude} />
      </MapContainer>
    </>
  );
};

export default Map;
