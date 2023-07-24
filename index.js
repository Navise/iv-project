const express = require("express")
const path = require("path")

exp = express()
exp.use(express.static('public'))
exp.use(express.urlencoded({ extended: true }));


exp.get("/login", (req , res) =>{
    res.sendFile(path.resolve("public\\login.html"))

})

exp.post('/login' , (req , res) => {
    const {Name , password} = req.body;
    if(Name == "admin" && password == "ramramram"){
       res.redirect('/ArmSimulator')
    }
})

exp.get("/ArmSimulator", (req ,res) => {
    res.sendFile(path.resolve("public\\armsimulator.html"))
})
exp.listen(2500 , ()=>console.log("Port started at 2500"))