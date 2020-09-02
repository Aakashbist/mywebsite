import React, { useEffect, useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  ListItemText,
  Grid,
} from "@material-ui/core";
import image from "../../../assets/main.svg";

function SkillList(props) {
  useEffect(() => {
    console.log(skills);
    console.log();
  }, []);
  const [skills, setSkills] = useState(props.skills);
  useEffect(() => {
    if (props.skills) {
      setSkills(props.skills);
    }
  }, [props.skillSet]);
  return (
    <Grid item xs={12} sm={12} className="card">
      <h1> {props.name}</h1>

      {skills.map((s, i) => {
        return (
          <Grid container direction="row" alignItems="center" justify="center">
            <ListItemText key={i}>
              <p>{s.name}</p>
            </ListItemText>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SkillList;
