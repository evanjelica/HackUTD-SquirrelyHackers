import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import { FaCentercode } from 'react-icons/fa';

function Map(){
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 32.979800, lng:-96.751880 }}/>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapComponent(){
    return (
        <div style={{width: '100vw', height: '90vh'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,
                drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{height:"100%"}}/>}
                containerElement={<div style={{height:"100%"}}/>}
                mapElement={<div style={{height:"100%"}}/>}
            />
        </div>
    ) 
}
