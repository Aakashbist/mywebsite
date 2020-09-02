import React from "react";
import { Container, Grid, Divider, Typography } from "@material-ui/core";
import WorkExperience from "./WorkExperience";
import { profileDetail } from "../../../api/data";
import Portfolio from "../portfolio/Portfolio";
function Experience() {
  const experienceInfo = profileDetail.experience;

  return (
    <section className="experience" id="experience">
      <Grid className="topography">
        {experienceInfo.map((experience, key) => {
          return <WorkExperience key={key} experience={experience} />;
        })}
      </Grid>

      <Portfolio />
    </section>
  );
}

export default Experience;
