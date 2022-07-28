const workoutService= require("../services/workoutService");

const getAllWorkouts= (req,res)=>{
    const allworkouts= workoutService.getAllWorkouts();
    res.send({status: 'OK', data: allworkouts});
};

const getOneWorkout= (req,res)=>{
    const workout= workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get Workout ${req.params.workoutId}`);
};

const createNewWorkout= (req,res)=>{
    const createdworkout= workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create Workout ${req.params.workoutId}`);
};

const updateOneWorkout= (req,res)=>{
    const updatedworkout= workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update Workout ${req.params.workoutId}`);
};

const deleteOneWorkout= (req,res)=>{
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete Workout ${req.params.workoutId}`);
};

module.exports= {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}