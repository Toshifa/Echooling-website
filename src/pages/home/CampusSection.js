import React  from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/SectionTitle'


import campusImg1 from '../../assets/images/campus/1.svg'
import campusImg2 from '../../assets/images/campus/excellence.png'
import campusImg3 from '../../assets/images/campus/3.png'
import campusImg4 from '../../assets/images/campus/resilience.png'
import campusImg5 from '../../assets/images/campus/2.png'
import campusImg6 from '../../assets/images/campus/innovation.png'

import campusImg7 from '../../assets/images/campus/attributeSection.png'
import campusShape from '../../assets/images/campus/shape.png'
import campusImg8 from '../../assets/images/campus/3Dimg.png'
import campusImg9 from '../../assets/images/campus/rainbow.png'


const Campus = () => {

    return (
        <div className="campus_sec pt---100 pb---110">
            <div className="container">
                <SectionTitle Title="Our Distinctive Attributes" />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="about__content">
                            <ul>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg1} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Acadene</h4>
                                        <p>Offer a cutting-edge Learning Management System. </p>
                                    </div>
                                    {/* <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link> */}
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg2} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Extracurricular Activities</h4>
                                        <p>Clubs, sports teams, arts programs, and
                                            community service <br/>opportunities to foster holistic development.
                                        </p>
                                    </div>
                                    {/* <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link> */}
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg3} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Character Education</h4>
                                        <p> Values-based education, leadership
                                            programs, and <br/> character-building initiatives to foster
                                            integrity, empathy, <br/> and ethical decision-making.
                                        </p>
                                    </div>
                                    {/* <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link> */}
                                </li>
                                {/* <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg4} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Parental Involvement</h4>
                                        <p> Regular communication, parent-teacher associations,
                                            and <br/> family engagement events to involve parents in their child's education.
                                        </p>
                                    </div>                                    
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg5} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Emotional Well-being</h4>
                                        <p> Counseling services, mental health support, and
                                            mindfulness programs to promote emotional resilience and well-being.
                                        </p>
                                    </div>                                    
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg6} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Technology Integration</h4>
                                        <p> Utilizing technology for interactive learning
                                            experiences, <br/> online resources, and virtual classrooms.
                                        </p>
                                    </div>                                    
                                </li> */}
                            </ul>  
                        </div>                              
                    </div>
                    <div className="col-lg-5">                                
                        <div className="about__image">
                            <img src={campusImg7} alt="image" />
                            {/* <img className='icon_design1' src={campusImg5} alt="design" /> */}
                            {/* <img className="shape-1" src={campusShape} alt="image" /> */}
                        </div>   
                        {/* <div className="about__image2">
                            <img src={campusImg8} alt="image" />
                    
                        
                        </div>                                */}
                    </div>
                </div>
                {/* <div className="text-center">
                    <Link to="/about" className="more-about"> More about Campus Life <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                </div> */}
                <div className="row">
                    <div className="col-lg-5">                                
                         
                         <div className="about__image2">
                             <img src={campusImg8} alt="image" />
                     
                         
                         </div>                               
                    </div>
                    <div className="col-lg-7">
                        <div className="about__content">
                            <ul>
   
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg4} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Parental Involvement</h4>
                                        <p> Regular communication, parent-teacher associations,
                                            and <br/> family engagement events to involve parents in their child's education.
                                        </p>
                                    </div>                                    
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg5} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Emotional Well-being</h4>
                                        <p> Counseling services, mental health support, and
                                            mindfulness programs to promote emotional resilience and well-being.
                                        </p>
                                    </div>                                    
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg6} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Technology Integration</h4>
                                        <p> Utilizing technology for interactive learning
                                            experiences, <br/> online resources, and virtual classrooms.
                                        </p>
                                    </div>                                    
                                </li>
                            </ul>  
                        </div>                              
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Campus;