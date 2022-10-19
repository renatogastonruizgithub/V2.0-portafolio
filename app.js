const express =require('express')
const router= require('./src/routes/skillsRoute') 
const projects=require('./src/routes/projectsRoute')
const portafolio=require('./src/routes/portafolioRoute')
const about=require('./src/routes/aboutRouter')
const home=require('./src/routes/homeRouter')
const details=require('./src/routes/detailsProjectRouter')
const sequelize=require('./src/dataBase/connection')
const {indexDb}=require('./src/models/index')


/* const cors = require('cors'); */
const {errorHandle,notFound}=require('./src/middlewares/errors')
const {validPortafolio }= require('./src/middlewares/validPortafolio')
const app=express()
let PORT = 3000;

/* app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"],
})); */

app.use(express.json())
app.use('/api/',router)
app.use('/api/',projects)
app.use('/api/',portafolio)
app.use('/api/',about)
app.use('/api/',home)
app.use('/api/',details)
app.use(indexDb)// llamo a todos los modelos

app.use(validPortafolio)
app.use(errorHandle) // middle
app.use(notFound)

app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})




  
