import { Link } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import getProgram from "../handles/handleGetProgram";
import getSessions from "../handles/handleGetSessions";
import { getCurrentUser } from "./Auth";

export default class ExerciseProgram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      økter: [],
      programmer: [],
      newList: [],
      øktIProgram: new Map(),
    };
  }

  getProgramList() {
    getCurrentUser()
      .then((user) => {
        if (user) {
          const fetchSession = getSessions(user);
          console.log(fetchSession + "dette er øktene");
          fetchSession.then((økter) => {
            this.setState(
              {
                økter: økter,
              },
              () => {
                this.state.økter.forEach((økt) => {
                  console.log(økt.name + "Hvor er vi");
                });
              }
            );
          });

          const fetchProgram = getProgram(user.email);
          console.log(fetchProgram + "dette er programmene");
          fetchProgram.then((programmer) => {
            this.setState(
              {
                programmer: programmer,
              },
              () => {
                this.state.programmer.forEach((program) => {
                  console.log(program.metaData.data());
                  this.getCorrectExercises();
                });
              }
            );
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSessionList() {
    getCurrentUser()
      .then((user) => {
        if (user) {
          this.getCorrectExercises();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCorrectExercises() {
    console.log(this.state.programmer);
    let øktIProgramMap = new Map();
    this.state.programmer.forEach((program) => {
      let newList = [];
      øktIProgramMap.set(program.metaData.data().Navn, []);
      this.state.økter.forEach((økt) => {
        program.sessions.docs.forEach((øktIProgram) => {
          if (øktIProgram.data().Navn === økt.name) {
            øktIProgramMap.get(program.metaData.data().Navn).push(økt);
            console.log("session added");
          }
        });
        console.log(øktIProgramMap);
        newList = [];
      });
    });

    this.setState({
      øktIProgram: øktIProgramMap,
    });
  }

  handleGoBack(){
    window.location.href="/feed";
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar edge="start" aria-label="menu">
            <IconButton color="inherit" onClick={this.handleGoBack}>
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h6"
              style={{ flexGrow: 1, textAlign: "center" }}
            >
              Mine Programmer
            </Typography>
          </Toolbar>
        </AppBar>

        <div>
          {this.state.programmer.map((program) => (
            <Box border={8} borderColor="#FFFFFF" borderRadius={0}>
              <Card>
                <CardActionArea style={{ backgroundColor: "#FCD299" }}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {program.metaData.data().Navn}
                    </Typography>

                    {console.log(this.state.øktIProgram)}
                    {this.state.øktIProgram.has(
                      program.metaData.data().Navn
                    ) ? (
                      this.state.øktIProgram
                        .get(program.metaData.data().Navn)
                        .map((økt) => (
                          <Typography variant="body2" component="p">
                            {økt.name}
                          </Typography>
                        ))
                    ) : (
                      <p></p>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.getProgramList();
              this.getSessionList();
            }}
          >
            Last in programmer
          </Button>
          <Link to="/program">
            <Button variant="contained" color="primary" onClick={() => {}}>
              Legg Til Nytt
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
