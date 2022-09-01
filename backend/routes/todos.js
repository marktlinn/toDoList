const express = require('express');
const Todo = require('../models/todosModels')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send(`<h1>Todos Live Here!</h1>`)
})

//Gets a singular Todo
router.get('/:id', (req,res)=>{
    res.send(`<h1>Just one ToDo!</h1>`)
})


//Post a new Todo
router.post('/', async (req,res)=>{
    const { title, description} = req.body;
    try {
        const todo = await Todo.create({title, description})
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
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