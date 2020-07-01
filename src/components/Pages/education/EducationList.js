import React from 'react';
import { Grid, ListItemText, ListItemAvatar, Avatar, ListItem } from '@material-ui/core';

function EducationList({ education }) {

    return (
        <div >

            <div >
                <Avatar src={education.image} variant="square" sizes='xlarge' />
            </div>

            <div >
                <Grid  >
                    <div >
                        <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                            <label className="title" >{education.degreeName}</label>
                        </Grid>
                        <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                            <b><span className="education__statement_text">{education.collageUniName}</span></b>
                        </Grid>
                        <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                            <span className="education__statement_text"> {education.location} | {education.year}</span>
                        </Grid>
                    </div>
                </Grid>
            </div>

        </div>

    )
}

export default EducationList;