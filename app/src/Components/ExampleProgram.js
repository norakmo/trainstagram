import React from "react";
import { Box, Button, Card, CardContent, Typography, AppBar, IconButton, Toolbar, CardActionArea } from '@mui/material';
import {ArrowBack} from '@mui/icons-material';


const program = [
    [{type: "Cardio"}], 
    [], 
    [], 
    [], 
    [], 
    [], 
    [],
];


export default class ExampleProgram extends React.Component{
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
                                Helvetesuke
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div>
                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 1</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>

                        <Box border={10} borderColor="#FFFFFF" borderRadius={0}>
                            <Card>
                                <CardActionArea style={{ backgroundColor: '#99BADD' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Cardio
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Intervall, 6x6 løping
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 2</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>
                        
                        <Box border={10} borderColor="#FFFFFF" borderRadius={0}>
                            <Card>
                                <CardActionArea style={{ backgroundColor: '#FF7276' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Styrke
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            4 øvelser
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 3</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>
                        
                        <Box border={10} borderColor="#FFFFFF" borderRadius={0}>
                            <Card>
                                <CardActionArea style={{ backgroundColor: '#FF7276' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Styrke
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            4 øvelser
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 4</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>

                        <Box border={10} borderColor="#FFFFFF" borderRadius={0}>
                            <Card>
                                <CardActionArea style={{ backgroundColor: '#99BADD' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Cardio
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Langtur, 10 km, 60 min
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 5</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>

                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 6</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>

                            <Box mb={1}>
                                <Typography variant="h6" ml={2}>Dag 7</Typography>
                            </Box>
                            <Box border={1} borderColor="grey.400"></Box>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                        <Button variant="contained" color="primary">
                            Legg Til Ny
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
