const express= require("express");
const v1Router= require("./v1/routes/");
const app= express();
const PORT= process.env.PORT || 3000;

//rutas
app.use("/api/v1", v1Router);

app.listen(PORT,()=>{
    console.log(`Server Listening in port ${PORT}`);
});