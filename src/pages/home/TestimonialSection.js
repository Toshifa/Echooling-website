import React from 'react';
import Slider from "react-slick";

import SectionTitle from '../../components/SectionTitle'
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';

import testiImg1 from '../../assets/images/testimonial/3dhand1.jpg';
import testiImg2 from '../../assets/images/testimonial/3dhand2.jpg';
import testiImg3 from '../../assets/images/testimonial/group-people.jpg';
import testiImg4 from '../../assets/images/testimonial/3dhand3.png';
import testiImg5 from '../../assets/images/testimonial/speech_bubble.jpg';
import comaImg from '../../assets/images/testimonial/coma.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="react-clients react-clientso home-testimonial pt---90 pb---120">
                <div className="container">
                    <SectionTitle Title="What our parent saying" />
                    <div className="client-slider wow animate__fadeInUp" data-wow-duration="0.3s">
                        <Slider {...testimonialSettings}>
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg3 }
                                Title=" Excellent!"
                                Designation="Nita Sharma"
                                Desc="We are very satisfied. Our child always gets ample opportunities to explore and progress in all aspects. The school has been effective in creating a suitable balance between co-curricular and academic activities."
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg4 }
                                Title="Hard Working Staff"
                                Designation="Swaraj Rout"
                                Desc="MountFort School is doing brilliantly in every area, particularly in terms of exposing them to a wide range of experiences. Excellently designed and arranged Academic programmes. Excellent work from all of the teachers. I am really appreciative of the Principal, Coordinator, and Teachers. My child is being groomed very well. I believe that choosing to send my child to MountFort School was the best choice. Continue as you are! I hope MountFort School has great success."
                                
                                ratingCount='4.5'
                                reviewCount='9'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg1 }
                                Title="Generate Self Confidence"
                                Designation="Yashika Sharma"
                                Desc="Ritika's social and communication skills have greatly improved as a result of many classroom activities."
                                ratingCount='4.6'
                                reviewCount='4'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg2 }
                                Title="One of the best school in Aushapur"
                                Designation="Sneha Singh"
                                Desc="One of the best Pre-school which is constantly maintaining the standard since day 1. Not just another regular pre-school for sure, can be considered as a best gift/ investment for kids. Keep going. Deserves 5 star : )"
                                ratingCount='4.9'
                                reviewCount='12'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg5 }
                                Title="Child Centric"
                                Designation="Rudra Nayak"
                                Desc="Thank you so much for offering such a great school with so many activities and real great teachers. This is fifth year of my son with school and I have seen lots of improvements in him. The one thing what I liked most about the school is that they focus on child centered education not on teacher centered education and help the child in their overall development.
                                I am a very happy parent thank you so much to you all !!"
                                ratingCount='4.5'
                                reviewCount='10'
                                comaImg={comaImg}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial