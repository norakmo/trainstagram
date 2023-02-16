import React from "react";
import Avatar from '@mui/material/Avatar';
import { Button, Card, CardContent, Grid, Typography, AppBar, IconButton, Toolbar } from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import PropTypes from "prop-types";
import Profilbilde from './Profilbilde.png'



export default class ExerciseProgram extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <AppBar position = "static">
                        <Toolbar edge = "start" aria-label="menu">
                            <IconButton color="inherit">
                                <ArrowBack />
                            </IconButton>
                            <Typography variant="h6" style = {{flexGrow: 1, textAlign: 'center'}}>
                                Mine Programmer
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                    <Button variant="contained" color="primary">
                    Legg Til Nytt
                    </Button>
                </div>
                </div>
            </div>
        )
    }
}
