require('dotenv').config( {path: './config/.env'})
const PORT = process.env.PORT || 3000;
const express = require('express');
const connectDB = require('./config/db')
//express app setup
const app = express()

//database connection
connectDB()

//middleware 
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//Routes
const todosRoutes = require('./routes/todos')
app.use('/api/todo',todosRoutes)


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})