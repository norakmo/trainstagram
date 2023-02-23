/* import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  CardActionArea,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { workoutPrograms, programState } from "./ExerciseProgram";

const program = workoutPrograms[programState];

const programliste = [];

for (let i = 0; i < program.duration; i++) {
  const sessions = [];

  for (let j = 0; j < program.days[i].length; j++) {
    const session = program.days[i][j];
    const sessionColor = "#FF7276";

    sessions.push(
      <Box border={10} borderColor="#FFFFFF" borderRadius={0}>
        <Card>
          <CardActionArea style={{ backgroundColor: sessionColor }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {session.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
  }

  programliste.push(
    <div>
      <Box mb={1}>
        <Typography variant="h6" ml={2}>
          Dag {i + 1}
        </Typography>
      </Box>
      <Box border={1} borderColor="grey.400"></Box>
      {sessions}
    </div>
  );
}

export default class ExampleProgram extends React.Component {
  render() {
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar edge="start" aria-label="menu">
              <IconButton color="inherit">
                <ArrowBack />
              </IconButton>
              <Typography
                variant="h6"
                style={{ flexGrow: 1, textAlign: "center" }}
              >
                Helvetesuke
              </Typography>
            </Toolbar>
          </AppBar>

          {programliste}

          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Button variant="contained" color="primary">
              Legg Til Ny
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
 */
