import React from 'react';
import { profileDetail } from '../../api/data';
import {
    Grid,
} from "@material-ui/core";

import { EmailRounded, Call, GitHub, LinkedIn, ShopTwo } from '@material-ui/icons';

function SocialMedia() {
    const contactInfo = profileDetail.personalDetail;

    return (
        <div >
            <Grid container justify="center" spacing={3}>
                <Grid item >
                    <a href={"mailto:" + contactInfo.emailId} rel="noopener noreferrer" ><EmailRounded fontSize="large" color="action" /></a>
                </Grid>
                <Grid item >
                    <a href={"tel:" + contactInfo.number} rel="noopener noreferrer" ><Call fontSize="large" color="action" /></a>
                </Grid>
                <Grid item >
                    <a href={contactInfo.linkedAccounts.github} target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" color="action" /></a>
                </Grid>
                <Grid item >
                    <a href={contactInfo.linkedAccounts.linkedIn} target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" color="action" /></a>
                </Grid>
                <Grid item >
                    <a href={contactInfo.linkedAccounts.playStore} target="_blank" rel="noopener noreferrer"><ShopTwo fontSize="large" color="action" /></a>
                </Grid>
            </Grid>
        </div>
    )
}
export default SocialMedia;