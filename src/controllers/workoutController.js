const getAllWorkouts= (req,res)=>{
    res.send("Get All Workouts");
};

const getOneWorkout= (req,res)=>{
    res.send(`Get Workout ${req.params.workoutId}`);
};

const createNewWorkout= (req,res)=>{
    res.send(`Create Workout ${req.params.workoutId}`);
};

const updateOneWorkout= (req,res)=>{
    res.send(`Update Workout ${req.params.workoutId}`);
};

const deleteOneWorkout= (req,res)=>{
    res.send(`Delete Workout ${req.params.workoutId}`);
};

module.exports= {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}