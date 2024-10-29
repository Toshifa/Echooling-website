import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <ul className="address-sec">
            <li>
                <em className="icon"><img src={infoImg1} alt="image" /></em>
                <span className="text"><em>Address</em> FP6M+V57, Aushapur (V), Ghatkesar(M),<br/> Medchal Dist, Telangana 501301</span>
            </li>
            <li>
                <em className="icon"><img src={infoImg2} alt="image" /></em>
                <span className="text"><em>Contact</em> <a href="#">Mobile: 9515147442,<br/> 9603999926</a> <a href="#">Mail: contact@echooling.com</a></span>
            </li>
            <li>
                <em className="icon"><img src={infoImg3} alt="image" /></em>
                <span className="text"><em>Hour of operation</em> Monday - Saturday : <br/> 08:00 AM - 06:00 PM <br/>Sunday : Closed </span>
            </li>
        </ul>
    );

}

export default ContactInfo;