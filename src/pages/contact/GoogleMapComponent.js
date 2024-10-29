import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 17.453749, // Latitude 
    lng: 78.682101 // Longitude 
};

const GoogleMapComponent = () => {
    return (
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9487361500346!2d78.72830846950525!3d17.462167564068576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76b9eac47035%3A0x36ee8e705fbf446e!2sFP6M%2BV57%2C%20Aushapur%2C%20Telangana%20501301!5e0!3m2!1sen!2sin!4v1716448473374!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
    );
}

export default GoogleMapComponent;
