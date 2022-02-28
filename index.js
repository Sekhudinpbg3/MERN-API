const express= require('express');
const app= express();

app.use(()=>{
    console.log("Hello Server");
    console.log("Sekhudin");
    console.log("Saya adalah owner");
})

// Berjalam pda port 4000
app.listen(4000)