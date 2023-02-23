import React from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { Card } from "@mui/material";
import addStrengthExercise from "../handles/handleStrengthExercise";
import addCardioExercise from "../handles/handleCardioExercise";
import { getCurrentUser } from "./Auth";
import Cardio from "./Cardio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import "./Strength.css";

export default class Strength extends React.Component {
  constructor(type, kg, reps, sets) {
    super();
    this.type = type;
    this.kg = kg;
    this.reps = reps;
    this.state = {
      name: "",
      distance: "",
      time: "",
      rows: [],
    };
    this.sets = sets;
  }

  setName(name) {
    this.setState({ name });
  }
  setDistance(distance) {
    console.log(distance + "dette er distance i set distance");
    this.setState({ distance });
    console.log(this.state.distance + "funker det her");
  }
  setTime(time) {
    this.setState({ time });
  }

  handleAddRowCardio = (typeName) => {
    console.log(this.state.distance + "nå er vi i handle add row cardio");
    if (!this.state.distance || !this.state.time) {
      return;
    }
    const newRow = {
      id: this.state.rows.length + 1,
      exercise: typeName,
      distance: this.state.distance + " km",
      time: this.state.time + " min",
    };
    this.state.rows.push(newRow);
    this.state.distance = "";
    this.state.time = "";
    this.forceUpdate();
  };

  handleAddRowStrength = (typeName) => {
    if (!this.kg || !this.reps || !this.sets) {
      return;
    }
    const newRow = {
      id: this.state.rows.length + 1,
      exercise: typeName,
      kg: this.kg + " kg",
      reps: this.reps + " reps",
      sets: this.sets + " sets",
    };
    this.state.rows.push(newRow);
    this.kg = "";
    this.reps = "";
    this.sets = "";
    this.forceUpdate();
  };

  handleDeleteRow = (id) => {
    this.state.rows = this.state.rows.filter((row) => row.id !== id);
    this.forceUpdate();
  };

  onClick1() {
    const kg = this.kg;
    const reps = this.reps;
    const sets = this.sets;

    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          console.log(kg + "dette er kg i on click1");
          this.setType(Collapsible);
          this.strengthExercises.push(new Strength("Benk", kg, reps, sets));
          addStrengthExercise(
            user.email,
            "Benk",
            kg,
            reps,
            sets,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick2() {
    const kg = this.kg;
    const reps = this.reps;
    const sets = this.sets;
    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          this.setType(Collapsible);
          this.strengthExercises.push(new Strength("Markløft", kg, reps, sets));
          addStrengthExercise(
            user.email,
            "Markløft",
            kg,
            reps,
            sets,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick3() {
    const kg = this.kg;
    const reps = this.reps;
    const sets = this.sets;

    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          this.setType(Collapsible);
          this.strengthExercises.push(new Strength("Biceps", kg, reps, sets));
          addStrengthExercise(
            user.email,
            "Biceps",
            kg,
            reps,
            sets,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick4() {
    const kg = this.kg;
    const reps = this.reps;
    const sets = this.sets;
    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          this.setType(Collapsible);
          this.strengthExercises.push(new Strength("Triceps", kg, reps, sets));
          addStrengthExercise(
            user.email,
            "Triceps",
            kg,
            reps,
            sets,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick5() {
    const kg = this.kg;
    const reps = this.reps;
    const sets = this.sets;
    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          this.setType(Collapsible);
          this.strengthExercises.push(new Strength("Pushups", kg, reps, sets));
          addStrengthExercise(
            user.email,
            "Pushups",
            kg,
            reps,
            sets,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick6() {
    const kg = this.kg;
    const reps = this.reps;
    const sets = this.sets;
    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          this.setType(Collapsible);
          this.strengthExercises.push(new Strength("Situps", kg, reps, sets));
          addStrengthExercise(
            user.email,
            "Situps",
            kg,
            reps,
            sets,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick7() {
    const distance = this.state.distance;
    const time = this.state.time;
    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.email + "Vi er her nå ");
          this.setType(Collapsible);
          this.strengthExercises.push(new Cardio("Intervall", distance, time));
          addCardioExercise(
            user.email,
            "Intervall",
            distance,
            time,
            this.state.name
          );
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick8() {
    const distance = this.state.distance;
    const time = this.state.time;
    getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(distance + "Dette er distansen i distanse ");
          console.log(user.email + "Vi er her nå ");
          console.log(
            this.state.name + "Dette er navnet til økten i distanse "
          );

          this.setType(Collapsible);
          this.strengthExercises.push(
            new Cardio("Langkjøring", distance, time)
          );
          addCardioExercise(
            user.email,
            "Langkjøring",
            distance,
            time,
            this.state.name
          );
          this.forceUpdate();
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  strengthExercises = [];

  setType(type) {
    this.type = type;
  }

  setKg(kg) {
    this.kg = kg;
  }

  setReps(reps) {
    this.reps = reps;
  }

  setSets(sets) {
    this.sets = sets;
  }

  render() {
    return (
      <div className="training_main">
        <div className="training_wrapper">
          <h1 className="training_title">Training Session</h1>
          <ul className="list">
            <input
              className="training_name"
              type="text"
              placeholder="Name your session"
              onChange={(event) => {
                this.setName(event.target.value);
              }}
            ></input>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Benk" id="Benk" name="Benk">
                    <input
                      type="text"
                      placeholder="kg"
                      onChange={(event) => {
                        this.setKg(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      placeholder="reps"
                      onChange={(event) => {
                        this.setReps(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      placeholder="sets"
                      onChange={(event) => {
                        this.setSets(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick1();
                        this.handleAddRowStrength("Benk");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Markløft" id="Markløft">
                    <input
                      type="text"
                      id="kg"
                      name="kg"
                      placeholder="kg"
                      onChange={(event) => {
                        this.setKg(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="reps"
                      name="reps"
                      placeholder="reps"
                      onChange={(event) => {
                        this.setReps(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="sets"
                      name="sets"
                      placeholder="sets"
                      onChange={(event) => {
                        this.setSets(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick2();
                        this.handleAddRowStrength("Markløft");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Biceps" id="Biceps">
                    <input
                      type="text"
                      id="kg"
                      name="kg"
                      placeholder="kg"
                      onChange={(event) => {
                        this.setKg(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="reps"
                      name="reps"
                      placeholder="reps"
                      onChange={(event) => {
                        this.setReps(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="sets"
                      name="sets"
                      placeholder="sets"
                      onChange={(event) => {
                        this.setSets(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick3();
                        this.handleAddRowStrength("Biceps");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Triceps" id="Triceps">
                    <input
                      type="text"
                      id="kg"
                      name="kg"
                      placeholder="kg"
                      onChange={(event) => {
                        this.setKg(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="reps"
                      name="reps"
                      placeholder="reps"
                      onChange={(event) => {
                        this.setReps(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="sets"
                      name="sets"
                      placeholder="sets"
                      onChange={(event) => {
                        this.setSets(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick4();
                        this.handleAddRowStrength("Triceps");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Pushups" id="Pushups">
                    <input
                      type="text"
                      id="kg"
                      name="kg"
                      placeholder="kg"
                      onChange={(event) => {
                        this.setKg(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="reps"
                      name="reps"
                      placeholder="reps"
                      onChange={(event) => {
                        this.setReps(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="sets"
                      name="sets"
                      placeholder="sets"
                      onChange={(event) => {
                        this.setSets(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick5();
                        this.handleAddRowStrength("Pushups");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Situps" id="Situps">
                    <input
                      type="text"
                      id="kg"
                      name="kg"
                      placeholder="kg"
                      onChange={(event) => {
                        this.setKg(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="reps"
                      name="reps"
                      placeholder="reps"
                      onChange={(event) => {
                        this.setReps(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="sets"
                      name="sets"
                      placeholder="sets"
                      onChange={(event) => {
                        this.setSets(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick6();
                        this.handleAddRowStrength("Situps");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Intervall" id="Intervall">
                    <input
                      type="text"
                      placeholder="distance"
                      onChange={(event) => {
                        this.setDistance(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      placeholder="time"
                      onChange={(event) => {
                        this.setTime(parseInt(event.target.value));
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick7();
                        this.handleAddRowCardio("Intervall");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Langkjøring" id="Langkjøring">
                    <input
                      type="text"
                      placeholder="distance"
                      onChange={(event) => {
                        this.setState({
                          distance: parseInt(event.target.value),
                        });
                        console.log(event.target.value);
                      }}
                    ></input>
                    <input
                      type="text"
                      placeholder="time"
                      onChange={(event) => {
                        this.setState({ time: parseInt(event.target.value) });
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        this.onClick8();
                        this.handleAddRowCardio("Langkjøring");
                      }}
                    >
                      add
                    </button>
                  </Collapsible>
                </Card>
              </div>
            </li>
          </ul>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.exercise}
                    </TableCell>
                    <TableCell align="right">
                      {row.distance} {row.kg}
                    </TableCell>
                    <TableCell align="right">
                      {row.time} {row.reps}
                    </TableCell>
                    <TableCell align="right">{row.sets}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => this.handleDeleteRow(row.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button
            className="shoppingCart"
            onClick={() => console.log(this.strengthExercises)}
          ></button>
        </div>
      </div>
    );
  }
}
