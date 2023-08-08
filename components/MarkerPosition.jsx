"use client";
import React, { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

const MarkerPosition = (props) => {
  const position = [props.latitude, props.longitude];
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker position={position} />
    </>
  );
};

export default MarkerPosition;
