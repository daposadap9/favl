import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon icon={faLocation} />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
