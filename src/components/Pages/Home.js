import React from 'react';
import { profileDetail } from '../../api/data';
import {
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import SocialMedia from './SocialMedia';
import video from '../../assets/bg.mov'

function Home() {

  return (
    <div className="home">
      <div className="fullscreen-video-wrap">

        <video src={video} autoPlay={true} loop={true} muted={true} >

        </video>
      </div>
      <div class="header-overlay"></div>
      <Container>
        <Grid container direction="column">
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Grid container direction="row" alignItems="center" justify="center">
                <img src="https://avatars3.githubusercontent.com/u/19540506?s=460&u=63d78cc69e839fec04616f03c657a620b9331880&v=4" alt="Logo" className="home__logo_image" width="70%" />
              </Grid>

              <div className="home__socialMedia">
                <SocialMedia />
              </div>

              <Grid container direction="row" alignItems="center" justify="center" >
                <Grid container direction="column">
                  <div className="home__statement_text">
                    <h2>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</h2>
                  </div>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
