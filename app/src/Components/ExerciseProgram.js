



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

