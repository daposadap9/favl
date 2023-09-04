import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../Location/LocationPin";
const Map = ({ location, zoomLevel }) => (
  <div className="my-4 rounded-md">
    <h1 className="map-h2 text-center font-bold text-blue-500 text-2xl">
      Ubicacion de Clubes
    </h1>

    <div className="h-[400px] p-4 rounded-md">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
