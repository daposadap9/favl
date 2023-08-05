import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../Location/LocationPin";
const Map = ({ location, zoomLevel }) => (
  <div className="bg h-48 rounded-md">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="h-[500px] p-4 rounded-md">
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
