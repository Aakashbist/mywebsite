import React from "react";
import { Container, Grid, Divider, Typography } from "@material-ui/core";
import ProjectList from "./ProjectList";

import { profileDetail } from "../../../api/data";
function Portfolio() {
  const PortfolioList = profileDetail.portfolio;

  return (
    <div className="container">
      <div className="title"> My projects</div>

      <Grid container direction="row" justify="space-between" spacing={2}>
        {PortfolioList.map((portfolio, i) => (
          <Grid item xs={12} sm={5} md={3} lg={3} className="card-project">
            <ProjectList portfolio={portfolio} key={i} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
