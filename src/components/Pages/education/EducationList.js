import React from "react";
import { Container, Grid, Divider, Typography } from "@material-ui/core";
import image from "../../../assets/main.svg";
function EducationList({ education }) {
  return (
    <Container>
      <Grid container direction="row">
        <Grid container direction="row" justify={"space-between"} spacing={3}>
          <Grid
            container
            direction="row"
            justify={"space-between"}
            alignItems={"flex-start"}
            className="card"
          >
            <Grid
              container
              direction="row"
              justify={"space-between"}
              alignItems={"center"}
            ></Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6}>
              <Grid container direction="row">
                <img className="" src={education.image} alt="" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6}>
              <Grid container direction="column" className="info-text">
                <h1> {education.degreeName} </h1>
                <h2> {education.collageUniName} </h2>
                <p> {education.location} </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EducationList;
