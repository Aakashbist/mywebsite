import React from "react";
import { Container, Grid, Divider, Typography } from "@material-ui/core";
import { profileDetail } from "../../../api/data";
import EducationList from "./EducationList";
import Certification from "./Certification";

const Education = () => {
  const educationList = profileDetail.education;
  const certificationList = profileDetail.certification;

  const educationLists = educationList.map((education, i) => (
    <EducationList education={education} key={i} />
  ));
  const certificationLists = certificationList.map((certification, i) => (
    <Certification certification={certification} key={i} />
  ));

  return (
    <section className="education" id="education">
      <Grid>
        <Grid className="topography"> Education</Grid>
        <Grid>{educationLists}</Grid>
        <Grid className="topography"> Certification</Grid>
        <Grid>{certificationLists}</Grid>
      </Grid>
    </section>
  );
};
export default Education;
