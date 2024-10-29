import React from "react";


import Testimonial from '../about/TestimonialSection'

import Instructor from '../about/InstructorSection'
import ChairmanPart from "./ChairmanSection";
import CorrespondentPart from "./CorrespondentSection";

const SchoolMain = () => {


    return (
        <>
            <ChairmanPart />
            
            <CorrespondentPart />
            
            <Instructor />

            <Testimonial />
        </>
    )
}

export default SchoolMain;