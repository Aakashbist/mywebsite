import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import image from "../../../assets/main.svg";
import { FiberManualRecordRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

function WorkExperience(props) {
  const [roles, setRoles] = useState([]);
  const [experience, setExperience] = useState(props.experience);
  useEffect(() => {
    if (props.experience) {
      var data = props.experience;
      var responsibilities = data.responsibilities;
      setExperience(props.experience);
      setRoles(responsibilities);
    }
  }, [props.experience]);

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
              justify={"center"}
              alignItems={"center"}
            ></Grid>
            {experience && (
              <Grid container item xs={12} sm={12} md={6} lg={6}>
                <Grid container>
                  <div>
                    <Grid item>
                      <img src={experience.companyLogo} alt="" />
                    </Grid>
                    <Grid
                      item
                      style={{
                        fontSize: "16px",
                        textAlign: "center",
                        marginLeft: "-10px",
                      }}
                    >
                      {experience.start} - {experience.end}
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container direction="column" className="info-text">
                <Grid>
                  {experience && (
                    <div>
                      <h1>{experience.position}</h1>

                      <Grid container md={12} xs={12} sm={12} lg={12} xl={12}>
                        <Grid item>
                          <p>{experience.positionType}</p>
                        </Grid>
                        <Grid item>
                          <p>| {experience.company}</p>
                        </Grid>
                      </Grid>

                      <h2>Responsibilities</h2>
                      {/* <a
                        //rel="noopener noreferrer"
                        className="button"
                        href={experience.url}
                        target="_blank"
                      >
                        mirk.co
                      </a> */}
                    </div>
                  )}
                </Grid>
                <Grid container className="listItem">
                  {roles.map((role, s) => {
                    return (
                      <Grid>
                        <p>{role}</p>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WorkExperience;
