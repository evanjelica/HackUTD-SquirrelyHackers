import React, {useState} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import * as hospitalData from "./hospitalsTX.json";

function Map(){
    const [selectedHospital, setSelectedHospital] = useState(null);

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 32.979800, lng:-96.751880 }}
        >
            {hospitalData.features.map((hospital) =>
                <Marker key={hospital.attributes.ID}
                position={{lat: hospital.geometry.y, lng: hospital.geometry.x
                }}
                    onClick={() =>{
                        setSelectedHospital(hospital);
                    }}
                    
                />
            )}
            {selectedHospital && (
                <InfoWindow
                position={{lat: selectedHospital.geometry.y, lng: selectedHospital.geometry.x}}

                onCloseClick={()=> {setSelectedHospital(null);}}
                >
                    <div>
                        <h3>{selectedHospital.attributes.NAME}</h3>
                        <p>{selectedHospital.attributes.ADDRESS}</p>
                        <p>{selectedHospital.attributes.CITY}, {selectedHospital.attributes.ZIP}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapComponent(){
    return (
        <div style={{width: '99vw', height: '100vh'}}>
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
