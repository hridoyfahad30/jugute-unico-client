/* eslint-disable react/prop-types */
import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  // Set the center coordinates for the map
  const center = {
    lat: 46.7222843945923, // Latitude
    lng:  2.5027500916791436,// Longitude
  };

  const Marker = ({ text }) => (
    <div style={{ color: 'White', fontSize: '20px', fontWeight: 'bold' }}>
      {text}
    </div>
  );

  // Set the zoom level for the map
  const zoom = 15;

  return (
    <div className='my-12' style={{ height: '400px', width: '100%' }} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700">
        
      {/* Render the GoogleMapReact component */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.GOOGLE_MAP }} // Replace with your Google Maps API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Add markers or other components as needed */}
        {/* Example Marker */}
        <Marker
          lat={46.7222843945923}
          lng={ 2.5027500916791436}
          text="JUGUETE ÚNICO"
        />
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;
