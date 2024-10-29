import React from 'react';

import SectionTitle from '../../components/SectionTitle'

import SingleService from '../../components/Service/SingleService';

import serviceImg1 from '../../assets/images/service/prePrimarySchool.png'
import serviceImg2 from '../../assets/images/service/primarySchool.png'
import serviceImg3 from '../../assets/images/service/middleSchool.png'
import serviceImg4 from '../../assets/images/service/secondarySchool.png'

const Service = () => {

    return (
        <div className="react_popular_topics pt---100 pb---70">
            <div className="container">
                <SectionTitle Title="Academics" />
                <div className="row">
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <SingleService
                            itemImg={serviceImg1}
                            title="Pre-primary Education"
                            paraText="Provides a full day of academic instruction with a good balance of hands-on activities, play, and rest."
                        />
                    </div>
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <SingleService
                            itemImg={serviceImg2}
                            title="Primary Education"
                            paraText="primary education is designed for young children aged spanning from grades 1 to 5, during which children acquire fundamental knowledge"
                        />
                    </div>
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.7s">
                        <SingleService
                            itemImg={serviceImg3}
                            title="Middle Education"
                            paraText="The Middle education is for children from grades 6 to 8, and focuses on helping students develop a strong foundation in academics and apply their learning in the real world."
                        />
                    </div>
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.9s">
                        <SingleService
                            itemImg={serviceImg4}
                            title="Secondary Education"
                            paraText="At this stage, the school’s teaching is oriented to help children think outside the box, enhance critical thinking, and improve problem-solving abilities, while also preparing them to face board exams and beyond."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;