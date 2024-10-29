import { Link } from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/ab.png';
import aboutBadge from '../../assets/images/about/badge.png';

const About = () => {

    return (
        <div className="about__area about__area_one p-relative pt---10 pb---50">
            <div className="container">                        
                <div className="row school_image1">
                    <div className="col-lg-6">
                        <div className="about__image">
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={aboutBadge} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6 content-beside">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Welcome to <br/> <em>MountFort LMS Platform</em></h2>
                            <p className="school__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Welcome from Chairman</p>
                            
                            <p className="wow animate__fadeInUp" data-wow-duration="0.6s"> Welcome to each of you to the Mountfort School. <br/>As the Chairman of Mountfort, I am honored to lead an institution that is committed to nurturing young minds and  <br/>shaping the leaders of tomorrow.</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.6s">  Our school has always stood as a beacon of academic excellence, innovation, and holistic development, and it is our unwavering dedication to these values that sets us apart.
                            </p>
                        </div>
                    </div>                     
                </div>

                <div className="row content-under">
                    <div className="col-lg-12">
                        <div className="about__content">
                            <p>At Mountfort, we believe in fostering an environment where every student feels valued, supported, and empowered to reach their fullest potential.  <br/>Through our comprehensive curriculum, state-of-the-art facilities, and dedicated faculty, we strive to provide a learning experience that is both enriching and transformative. </p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.6s"> As we navigate through the challenges and opportunities of the 21st century, our commitment to academic rigor, critical thinking, and character development remains steadfast. <br/>We aim to equip our students with the knowledge, skills, and values necessary to thrive in an ever-changing world, while also instilling in them a sense of compassion, integrity, and social responsibility.</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.6s"> I encourage you to explore our website to learn more about the exciting programs, activities, and initiatives that make Mountfort a truly exceptional place for learning and growth.<br/> Whether you are a prospective student, a proud parent, or a dedicated member of our faculty and staff, we invite you to join us on this journey of excellence and discovery.</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.6s"> Thank you for your continued support and partnership as we work together to inspire, educate, and empower the leaders of tomorrow.  </p>





                            {/* <p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Have questions?  
                            <Link to="#"> Get Free Guide </Link>
                            </p> */}
                            
                            {/* <p className="school__paragraph2">
                            <ul className=" wow animate__fadeInUp" data-wow-duration="0.9s">
                                <li><Link to="/school" className="more-about"> Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                                <li className="last-li">
                                    <em>Get Support</em>
                                    <Link to="mailto:support@react.com">support@react.com</Link>
                                </li>
                            </ul>
                            </p>         */}
                            
                            {/* <p className="wow animate__fadeInUp" data-wow-duration="0.6s">Education also refers to the knowledge received through schooling instruction <br/>and to the institution of teaching as a whole. The main purpose of education <br/>is the integral development of a person.</p>
                            <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                                <li><Link to="/school" className="more-about"> Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                                <li className="last-li">
                                    <em>Get Support</em>
                                    <Link to="mailto:support@react.com">support@react.com</Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;