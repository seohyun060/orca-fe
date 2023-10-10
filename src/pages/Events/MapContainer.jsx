import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapContainer() {
  const [mapStyle, setMapStyle] = useState({
    width: "1192px",
    height: "475px",
  });

  const changeMapSize = (width) => {
    if (width > 1400) {
      setMapStyle({ width: "1192px", height: "475px" });
    } else if (width > 1023) {
      setMapStyle({ width: "900px", height: "365px" });
    } else if (width > 767) {
      setMapStyle({ width: "700px", height: "284px" });
    } else {
      setMapStyle({ width: "330px", height: "142px" });
    }
  };

  const center = {
    lat: 35.8714, // 위도
    lng: 128.6014, // 경도
  };
  
  useEffect(() => {
    changeMapSize(window.innerWidth);
  }, []);

  let delay = 50;
  let timer = null;

  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      changeMapSize(window.innerWidth);
    }, delay);
  });

  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={14}>
        {/* 여기에 지도 내용을 추가하세요. */}
        <Marker
          title={"Daegu, Korea"}
          name={"Daegu, Korea"}
          position={{ lat: 35.8714, lng: 128.6014 }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
