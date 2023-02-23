import { Link } from 'react-router-dom';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';




const trainingSessions = [
    {
        name: "Styrke 1",
        numberOfExercises: 3,
        exercises: [
            {
                name: "Benk",
                sets: 3,
                reps: 8,
                vekt: 50,
            },
            {
                name: "Situps",
                sets: 3,
                reps: 30,
                vekt: 50,
            },
            {
                name: "Pushups",
                sets: 3,
                reps: 20,
                rest: 60,
            },
        ],
    },
    {
        name: "Styrke 2",
        numberOfExercises: 2,
        exercises: [
            {
                name: "Squats",
                sets: 3,
                reps: 10,
                vekt: 50,
            },
            {
                name: "Situps",
                sets: 3,
                reps: 30,
                vekt: 50,
            },
        ],
    },
    {
        name: "Styrke 3",
        numberOfExercises: 1,
        exercises: [
            {
                name: "Markløft",
                sets: 3,
                reps: 10,
                vekt: 100,
            },
        ],
    },
];


const workoutPrograms = [
    {
        id: 1,
        name: "Kom i gang",
        duration: 3,
        owner: "Tarjei",
        days: [
            [trainingSessions[0]],
            [],
            [trainingSessions[0], trainingSessions[2]],
        ],
    },
    {
        id: 2,
        name: "Sterk uke",
        duration: 7,
        owner: "Ole",
        days: [
            [trainingSessions[0]],
            [trainingSessions[1]],
            [trainingSessions[2]],
            [trainingSessions[1]],
            [trainingSessions[0]],
            [trainingSessions[2]],
            [trainingSessions[1]],
        ],
    },
];

let programState = 0;

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
                    {workoutPrograms.map((card, index) => (
                        <Box key={index} border={8} borderColor="#FFFFFF" borderRadius={0}>
                            <Link to="/program" onClick={() => programState = index}>
                                <Card>
                                    <CardActionArea style={{ backgroundColor: '#FCD299' }}>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {card.days.length} økter på {card.duration} dager. Eier: {card.owner}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
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

export {workoutPrograms}
export {programState}