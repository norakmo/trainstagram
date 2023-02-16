import React from "react";
import Avatar from '@mui/material/Avatar';
import { Box, Button, Card, CardContent, Typography, AppBar, IconButton, Toolbar, CardActionArea } from '@mui/material';
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

                    <div>
                        <Box style={{ backgroundColor: '#FBBF77' }} border={5} borderColor="white" borderRadius={2}>
                            <Card style={{border: "0px solid black"}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Helvetesuke
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            7 dager, 7 økter
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Button size="small" color="primary">
                                    Se mer
                                </Button>
                            </Card>
                        </Box>

                        <Box style={{ backgroundColor: '#FBBF77' }} border={5} borderColor="white" borderRadius={2}>
                            <Card style={{border: "0px solid black"}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Rolig uke
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            7 dager, 4 økter
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Button size="small" color="primary">
                                    Se mer
                                </Button>
                            </Card>
                        </Box>

                        <Box style={{ backgroundColor: '#FBBF77' }} border={5} borderColor="white" borderRadius={2}>
                            <Card style={{border: "0px solid black"}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Muscle Month
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            30 dager, 20 økter
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Button size="small" color="primary">
                                    Se mer
                                </Button>
                            </Card>
                        </Box>
                    </div>

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
