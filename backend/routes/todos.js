const express = require('express');
const router = express.Router()
const { getAllTodos, getTodo, createTodo } = require('../controllers/todosController')

//Get all Todos
router.get('/', getAllTodos)

//Get a singular Todo
router.get('/:id', getTodo)


//Post a new Todo
router.post('/', createTodo)

// Delete a Todo
router.delete('/:id', (req,res)=>{
    res.send(`<h1>Todo Deleted ;=D</h1>`)
})

// Update a Todo
router.put('/:id', (req,res)=>{
    res.send(`<h1>Todo updated.</h1>`)
})
module.exports = router