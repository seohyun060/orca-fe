import React, { useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import KakaoMapScript from '../components/KakaoMapScript';
type Props = {
  map: any;
  maps: any;
};
const mapStyles = {
  width: '980px',
  height: '485px',
};

const KakaoMapScriptContainer = () => {
  useEffect(() => {
    KakaoMapScript();
  }, []);
  return <div id='myMap' style={mapStyles}></div>;
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAp8e-J2RSSf8esc8o1S-0gJr8wg51mXqA',
})(KakaoMapScriptContainer);
