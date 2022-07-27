const express= require("express");
const v1WorkOutRouter= require("./v1/routes/workoutRoutes");
const app= express();
const PORT= process.env.PORT || 3000;

//rutas
app.use("/api/v1/workouts", v1WorkOutRouter);

app.listen(PORT,()=>{
    console.log(`Server Listening in port ${PORT}`);
});