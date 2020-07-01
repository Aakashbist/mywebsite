import React from 'react';
import { Container, Grid, ListItemText, ListItemAvatar, Avatar, ListItem } from '@material-ui/core';
import { profileDetail } from '../../../api/data';
import EducationList from './EducationList';

const Education = () => {

    const educationList = profileDetail.education;

    const list = educationList.map((education, i) => <EducationList education={education} key={i} />)

    return (
        <div className="education" >

            {list}

        </div>
    )
}
export default Education;