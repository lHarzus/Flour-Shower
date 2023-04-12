import React, { Fragment, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 41.551016, lng: -8.564273 }}
      mapContainerClassName="maps">
      <Marker position={{ lat: 41.551016, lng: -8.564273 }} />
    </GoogleMap>
  );
};
