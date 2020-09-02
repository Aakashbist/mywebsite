import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { profileDetail } from "../../../api/data";
import SkillList from "./SkillList";
import react from "../../../assets/react.png";
import kotlin from "../../../assets/kotlin.jpeg";
import html from "../../../assets/html.png";
import sass from "../../../assets/sass.png";
import android from "../../../assets/android.png";

function Skill() {
  const FrontEndSkills = profileDetail.skills.frontend;
  const BackEndSkills = profileDetail.skills.backend;
  const DatabaseSkills = profileDetail.skills.db;
  const Libraries = profileDetail.skills.javascriptLibrary;
  const Tools = profileDetail.skills.tools;

  const renderSkill = (name, data) => {
    return <SkillList name={name} skills={data} />;
  };
  return (
    <section className="skill" id="skill">
      <div className="title"> work with</div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={1}
        className="work-with-container"
      >
        <Grid item xs={4} md={2} lg={2} sm={4}>
          <img src={kotlin} />
        </Grid>
        <Grid item xs={4} md={2} lg={2} sm={4}>
          <img src={sass} />
        </Grid>
        <Grid item xs={4} md={2} lg={2} sm={4}>
          <img src={html} />
        </Grid>
        <Grid item xs={4} md={2} lg={2} sm={4}>
          <img src={react} />
        </Grid>
        <Grid item xs={4} md={2} lg={2} sm={4}>
          <img src={android} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
        className="container"
      >
        <Grid item xs={12} md={5} lg={5} sm={12} xl={5}>
          {renderSkill("Back End", BackEndSkills)}
        </Grid>
        <Grid item xs={12} md={5} lg={5} sm={12} xl={5}>
          {renderSkill("Front End", FrontEndSkills)}
        </Grid>

        <Grid item xs={12} md={5} lg={5} sm={12} xl={5}>
          {renderSkill("Database", DatabaseSkills)}
        </Grid>
        {/* <Grid item xs={12} md={4} lg={4} sm={12} xl={4}>
          {renderSkill("Libraries", Libraries)}
        </Grid> */}
        <Grid item xs={12} md={5} lg={5} sm={12} xl={5}>
          {renderSkill("Tools", Tools)}
        </Grid>
      </Grid>
    </section>
  );
}

export default Skill;
