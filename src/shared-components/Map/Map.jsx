import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css'

mapboxgl.accessToken = "pk.eyJ1Ijoic2Fua2V0OTAwNiIsImEiOiJjazN3eWl6bjgxMTFxM2xvcHlnYmsxY2gwIn0.q5pop7M_1dhutABvA3GOpw";

const Map = () => { 
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;