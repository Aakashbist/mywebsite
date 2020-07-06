import React from 'react';
import { Grid, ListItemText, ListItemAvatar, Avatar, ListItem } from '@material-ui/core';

function Certification({ certification }) {

    return (
        <div className="container">

            <div className="image">
                <img src={certification.image} width="70%" />
            </div>

            <div className="content" >
                <Grid  >
                    <div >
                        <Grid >
                            <label className="title" >{certification.name}</label>
                        </Grid>
                        <Grid >
                            <b><span className="education__statement_text">{certification.institute}</span></b>
                        </Grid>
                        <Grid >
                            <b><span className="education__statement_text">{certification.year}</span></b>
                        </Grid>
                    </div>
                </Grid>
            </div>

        </div>

    )
}

export default Certification;