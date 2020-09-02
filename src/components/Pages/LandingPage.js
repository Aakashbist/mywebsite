import React from "react";

import SocialMedia from "./SocialMedia";
import image from "../../assets/main.svg";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <section className="home" id="landingPage">
      <Grid
        container
        direction="row"
        justify={"center"}
        alignItems={"center"}
        className="item"
      >
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={8}
          lg={8}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            direction="row"
            justify={"space-between"}
            alignItems={"flex-start"}
          >
            <Grid
              container
              direction="row"
              justify={"space-between"}
              alignItems={"center"}
              className=""
            >
              <Grid container item xs={12} sm={12} md={6} lg={6}>
                <Grid container direction="column" className="info-text">
                  <h1>Mobile/Web Application Developer</h1>
                  <h2>
                    I'm a software developer with experience in web and android
                    application development. I mostly love to work with Java,
                    Kotlin, C#, React Native, SQL and Firebase
                  </h2>

                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid
                      container
                      direction="row"
                      className="home__socialMedia socialMediaIcon"
                    >
                      <SocialMedia />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={6} lg={6}>
                <Grid container direction="row">
                  <img className="" src={image} alt="" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
    //  <div className="home" id="landingPage">

    // <div>

    //     <div className="container">

    //       <div className="containSection">
    //         <div className="home__statement_text">
    //           <h2>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</h2>
    //         </div>
    //         <div className="home__socialMedia">
    //           <SocialMedia />
    //         </div>
    //       </div>
    //       <div className="imageSection">
    //         <img src={image} alt="Logo" className="logo_image" width="80%" />
    //       </div>
    //     </div>

    //   </div>
    //   <div className="slider">

    //   </div>

    // </div>

    // <div >
    //   <div className="home">

    //     <div className="container">

    //       <div className="home__statement_text">
    //         <h2>
    //           Mobile and Web Application Developer
    //       </h2>
    //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase

    //         </p>
    //         <div className="home__socialMedia">
    //           <SocialMedia />
    //         </div>

    //       </div>
    //       {/* <div className="xx">
    //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</p>

    //       </div> */}
    //     </div>

    //   </div >
    //   <div className="image" >
    //     {/* <img src={image} /> */}
    //   </div>
    // </div>
  );
}

export default Home;
