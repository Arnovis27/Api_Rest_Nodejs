const {v4: uuid}=require("uuid");

const Workout= require("../databases/Workout.js");

const getAllWorkouts= ()=>{
    const allWorkouts= Workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout= ()=>{
    return;
};

const createNewWorkout= (newWorkout)=>{
    const workoutToInsert={
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleString("en-Us",{timezone: "UTC"}),
        updateAt: new Date().toLocaleString("en-Us",{timezone: "UTC"}),
    }

    const createdworkout= Workout.createNewWorkout(workoutToInsert);
    return createdworkout;
};

const updateOneWorkout= ()=>{
    return;
};

const deleteOneWorkout= ()=>{
    return;
};

module.exports= {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}