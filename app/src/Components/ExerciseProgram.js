import React from "react";
import Avatar from '@mui/material/Avatar';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import PropTypes from "prop-types";
import Profilbilde from './Profilbilde.png'



export default class ExerciseProgram extends React.Component{
    render(){
        return (
            <div>
              <Typography variant="h3" component="h1" align="center" sx={{ my: 2 }}>
                Mine Programmer
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Button variant="contained" color="primary">
                  Legg Til Nytt
                </Button>
              </div>
            </div>
        )
    }
}
