import React from 'react';
import GoogleMapComponent from './GoogleMapComponent';


// import mapImg from '../../assets/images/contact/1.jpg'

const Map = (props) => {
    return (
        <div class="react-contacts pt-106"> 
            <div class="react-image-maping">
                <GoogleMapComponent />

                {/* <img src={mapImg} alt="Map" />
                <div class="react-ripple react-tooltip1"><div class="box"><span>New York</span></div></div> */}
            </div>
        </div> 
    );

}

export default Map;