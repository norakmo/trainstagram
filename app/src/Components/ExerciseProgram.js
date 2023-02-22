import React from "react";
import { Box, Button, Card, CardContent, Typography, AppBar, IconButton, Toolbar, CardActionArea } from '@mui/material';
import {ArrowBack} from '@mui/icons-material';

const programData = [
    {title: "Helvetesuke", content: "7 dager, 7 økter", programOwner: "Nora"},
    {title: "Rolig uke", content: "7 dager, 4 økter", programOwner: "Sondre"},
    {title: "Muscle month", content: "30 dager, 20 økter", programOwner: "Sunil"},
];


export default class ExerciseProgram extends React.Component{
    render(){
        return (
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
                    {programData.map((card, index) => (
                        <Box key={index} border={8} borderColor="#FFFFFF" borderRadius={0}>
                            <Card>
                                <CardActionArea style={{ backgroundColor: '#FCD299' }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {card.content}. Eier: {card.programOwner}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                    <Button variant="contained" color="primary">
                        Legg Til Nytt
                    </Button>
                </div>
            </div>
        )
    }
}