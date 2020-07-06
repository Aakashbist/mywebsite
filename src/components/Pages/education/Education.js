import React from 'react';
import { Container, Grid, Divider, Typography } from '@material-ui/core';
import { profileDetail } from '../../../api/data';
import EducationList from './EducationList';
import Certification from './Certification';

const Education = () => {

    const educationList = profileDetail.education;
    const certificationList = profileDetail.certification;

    const educationLists = educationList.map((education, i) => <EducationList education={education} key={i} />)
    const certificationLists = certificationList.map((certification, i) => <Certification certification={certification} key={i} />)

    return (
        <div className="education" >
            <div className="topography">
                Education
                {educationLists}
            </div>
            <div className="topography">
                Certification
                {certificationLists}
            </div>


        </div>
    )
}
export default Education;