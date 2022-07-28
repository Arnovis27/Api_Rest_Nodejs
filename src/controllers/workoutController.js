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
    const { body }= req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout={
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };

    const createdworkout= workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: 'OK', data: createdworkout});
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