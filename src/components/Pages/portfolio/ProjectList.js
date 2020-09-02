import React, { useEffect, useState } from "react";
import { Container, Grid, Divider, Typography, Box } from "@material-ui/core";
import image from "../../../assets/main.svg";

function Project(props) {
  const [portfolio, setPortfolio] = useState(props.portfolio);
  const [roles, setRoles] = useState([]);
  const [techList, setTechList] = useState([]);
  useEffect(() => {
    if (props.portfolio) {
      var ports = props.portfolio;
      var techList = ports.tech;
      setPortfolio(ports);
      var res = ports.responsibilities;

      setRoles(res);
      setTechList(techList);
    }
  }, [props.portfolio]);
  return (
    <div>
      <Box>
        <img src={portfolio.companyLogo} className="image" alt="Logo" />
      </Box>
      <div>
        <div className="overlay .fadeIn-top">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-around"
            className="text"
          >
            <h1>{portfolio.position}</h1>

            <a
              rel="noopener noreferrer"
              className="button"
              href={portfolio.url}
              target="_blank"
            >
              View Project
            </a>
            <a
              rel="noopener noreferrer"
              className="button"
              href={portfolio.githublink}
              target="_blank"
            >
              GitHub
            </a>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Project;
