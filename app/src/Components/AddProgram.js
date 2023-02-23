import "./AddProgram.css";
import React from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { Card } from "@mui/material";
import addStrengthExercise from "../handles/handleStrengthExercise";
import addProgram from "../handles/handleProgram";
import addSessionToProgram from "../handles/handleSessionAddProgram";
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
import ArrowBack from "@mui/icons-material/ArrowBack";

export default class AddProgram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfProgram: "",
      programToBeAdded: "",
      session: "",
      startTime: "",
      endTime: "",
      rows: [],
    };
  }

  setNameOfProgram(nameOfProgram) {
    this.setState({ nameOfProgram });
  }
  setProgramToBeAdded(programToBeAdded) {
    this.setState({ programToBeAdded });
  }
  setSession(session) {
    this.setState({ session });
  }
  setStartTime(startTime) {
    this.setState({ startTime });
  }
  setEndTime(endTime) {
    this.setState({ endTime });
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

  addProgramToFirebase() {
    getCurrentUser()
      .then((user) => {
        if (user) {
          addProgram(
            user.email,
            this.state.nameOfProgram,
            this.state.startTime,
            this.state.endTime
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addSessionToProgram() {
    console.log(this.state.nameOfProgram + "dette er navnet");
    getCurrentUser()
      .then((user) => {
        if (user) {
          // No user is signed in.
          addSessionToProgram(
            user.email,
            this.state.programToBeAdded,
            this.state.session
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleGoBack(){
    
    window.location.href = "/programs";
  }

  render() {
    return (
      <div className="training_main">
        <IconButton color="inherit" onClick={this.handleGoBack}>
              <ArrowBack />
          </IconButton>
        <div className="training_wrapper">
          <h1 className="training_title">Create a program</h1>
          <ul className="list">
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible
                    trigger="Name your program"
                    id="nameOfProgram"
                    name="nameOfProgram"
                  >
                    <input
                      type="text"
                      placeholder="Program name"
                      onChange={(event) => {
                        this.setNameOfProgram(event.target.value);
                      }}
                    ></input>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Time intervall of program" id="Time">
                    <input
                      type="text"
                      id="time"
                      name="time"
                      placeholder="Start"
                      onChange={(event) => {
                        this.setStartTime(parseInt(event.target.value));
                      }}
                    ></input>
                    <input
                      type="text"
                      id="time"
                      name="time"
                      placeholder="End"
                      onChange={(event) => {
                        this.setEndTime(parseInt(event.target.value));
                      }}
                    ></input>
                  </Collapsible>
                </Card>
                <Card className="card">
                  <button
                    onClick={() => {
                      this.addProgramToFirebase();
                    }}
                  >
                    Create Program
                  </button>
                </Card>
              </div>
            </li>
            <h2 className="training_title">Add session to program</h2>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Program" id="Program">
                    <input
                      type="text"
                      id="Program"
                      name="Program"
                      placeholder="Program"
                      onChange={(event) => {
                        this.setProgramToBeAdded(event.target.value);
                      }}
                    ></input>
                  </Collapsible>
                </Card>
              </div>
            </li>
            <li>
              <div className="card_container">
                <Card className="card">
                  <Collapsible trigger="Session" id="Session">
                    <input
                      type="text"
                      id="Session"
                      name="Session"
                      placeholder="Session"
                      onChange={(event) => {
                        this.setSession(event.target.value);
                      }}
                    ></input>
                  </Collapsible>
                </Card>
                <Card className="card">
                  <button
                    onClick={() => {
                      this.addSessionToProgram();
                    }}
                  >
                    add
                  </button>
                </Card>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
