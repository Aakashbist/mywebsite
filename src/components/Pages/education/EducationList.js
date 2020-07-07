import React from 'react';
import { Grid, ListItemText, ListItemAvatar, Avatar, ListItem } from '@material-ui/core';

function EducationList({ education }) {

    return (
        <div className="container">

            <div className="education__image">
                <img src={education.image} width="70%" />
            </div>

            <div className="content" >
                <Grid  >
                    <div >
                        <Grid >
                            <label className="title" >{education.degreeName}</label>
                        </Grid>
                        <Grid >
                            <span className="education__statement_text">{education.collageUniName}</span>
                        </Grid>
                        <Grid >
                            <span className="education__statement_text"> {education.location} | {education.year}</span>
                        </Grid>
                    </div>
                </Grid>
            </div>

        </div>

    )
}

export default EducationList;