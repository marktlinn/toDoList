const express = require('express');

const router = express.Router()

router.get('/', (req,res)=>{
    res.send(`<h1>Todos Live Here!</h1>`)
})

//Gets a singular todo
router.get('/:id', (req,res)=>{
    res.send(`<h1>Just one ToDo!</h1>`)
})


//Post a new Todo
router.post('/', (req,res)=>{
    res.send(`<h1>Post a new ToDo...</h1>`)
})

// Delete a Todo
router.delete('/:id', (req,res)=>{
    res.send(`<h1>Todo Deleted ;=D</h1>`)
})

// Update a Todo
router.put('/:id', (req,res)=>{
    res.send(`<h1>Todo updated.</h1>`)
})
module.exports = router