// import React from 'react';
// import { Link } from 'react-router-dom';

// import aboutImg from '../../assets/images/about/ab.png'
// import shapeImg from '../../assets/images/about/badge.png'

// const CorrespondentPart = () => {

//     return (
//         <div className="about__area about__area_one p-relative pt---100 pb---120">
//             <div className="container"> 
//                 <div className="row">
                    
//                     <div className="col-lg-6">
//                         <div className="about__content">
//                             {/* <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Welcome to <br/> <em>Echooling LMS Platform</em></h2> */}
//                             <p className="school__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Welcome from Correspondent</p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.5s">Dear Students, Parents, and Faculty,</p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.7s"> I extend a warm welcome to each of you to the MountFort School community. </p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.9s">As the Correspondent of MountFort School, I am privileged to be part of an institution committed to academic excellence and holistic development. <br/>Our school stands as a beacon of innovation and progress, driven by a dedication to nurturing young minds and shaping future leaders</p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.9s">We believe in creating an environment where every student feels valued, supported, and empowered to reach their fullest potential. <br/>Through our rigorous academic curriculum, state-of-the-art facilities, and dedicated educators, we strive to provide an enriching and transformative learning experience.</p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.9s">In this rapidly evolving world, our commitment to fostering critical thinking, creativity, and character remains unwavering.  <br/> We aim to equip our students with the skills, knowledge, and values necessary to thrive in an ever-changing society, while instilling in them a sense of empathy, integrity, and social responsibility.</p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.9s">I encourage you to explore our school's website to discover more about the diverse range of programs, activities, and opportunities that make MountFort School a truly exceptional learning community. <br/>  Whether you are a student, parent, or member of our esteemed faculty and staff, I invite you to join us in our journey of continuous growth and excellence.</p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.9s">Thank you for your ongoing support and collaboration as we work together to inspire, educate, and empower the leaders of tomorrow. </p>
//                             <p className="wow animate__fadeInUp" data-wow-duration="0.9s">Warm regards,<br/>  [Your Name] Correspondent, MountFort School
// </p>


//                             {/* <ul>
//                                 <li><Link to="/about" className="more-about wow animate__fadeInUp" data-wow-duration="1.2s"> Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
//                                 <li className="last-li wow animate__fadeInUp" data-wow-duration="1.3s">
//                                     <em>Get Support</em>
//                                     <a href="mailto:support@react.com">support@react.com</a>
//                                 </li>
//                             </ul> */}
//                         </div>
//                     </div>

//                     <div className="col-lg-6">
//                         <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
//                             <img src={aboutImg} alt="About" />
//                             {/* <img className="react__shape__ab" src={shapeImg} alt="Shape Image" /> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CorrespondentPart;

import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/images/about/ab.png';
import shapeImg from '../../assets/images/about/badge.png';

const CorrespondentPart = () => {
    return (
        <div className="about__area about__area_one p-relative pt---100 pb---120">
            <div className="container">
                <div className="row school_image2">
                    <div className="col-lg-6 content-beside">
                        <div className="about__content">
                            <p className="school__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Welcome from Correspondent</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.5s">Dear Students, Parents, and Faculty,</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.7s"> I extend a warm welcome to each of you to the MountFort School community. </p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">As the Correspondent of MountFort School, I am privileged to be part of an institution committed to academic excellence and holistic development. <br/>Our school stands as a beacon of innovation and progress, driven by a dedication to nurturing young minds and shaping future leaders</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">We believe in creating an environment where every student feels valued, supported, and empowered to reach their fullest potential. <br/>Through our rigorous academic curriculum, state-of-the-art facilities, and dedicated educators, we strive to provide an enriching and transformative learning experience.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>
                </div>

                <div className="row content-under">
                    <div className="col-lg-12">
                        <div className="about__content">
                            
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">In this rapidly evolving world, our commitment to fostering critical thinking, creativity, and character remains unwavering.  <br/> We aim to equip our students with the skills, knowledge, and values necessary to thrive in an ever-changing society, while instilling in them a sense of empathy, integrity, and social responsibility.</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">I encourage you to explore our school's website to discover more about the diverse range of programs, activities, and opportunities that make MountFort School a truly exceptional learning community. <br/>  Whether you are a student, parent, or member of our esteemed faculty and staff, I invite you to join us in our journey of continuous growth and excellence.</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">Thank you for your ongoing support and collaboration as we work together to inspire, educate, and empower the leaders of tomorrow. </p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">Warm regards,<br/>  [Your Name] Correspondent, MountFort School</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CorrespondentPart;
