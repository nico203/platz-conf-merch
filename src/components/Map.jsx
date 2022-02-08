import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

export function Map() {

const mapStyles = {
  height: '50vh',
  width: '100%'
};

const defaultCenter = {
  lat: 19.42465,
  lng: -99.31284
};

  return (
    <LoadScript googleMapsApiKey='asd'>
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}
