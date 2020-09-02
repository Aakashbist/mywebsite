import { Grid, Container } from "@material-ui/core";
import React from "react";

function Certification({ certification }) {
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
                <img className="" src={certification.image} alt="" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6}>
              <Grid container direction="column" className="info-text">
                <h1> {certification.name} </h1>
                <h2> {certification.institute} </h2>
                <p> {certification.year} </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Certification;
