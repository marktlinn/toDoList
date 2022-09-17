const express = require('express');
const router = express.Router()
const { getAllTodos, getTodo, createTodo, deleteTodo, updateTodo } = require('../controllers/todosController')
const requireAuth  = require('../middleware/requireAuth')

//Check user authentication on every route.
router.use(requireAuth)

//Get all Todos
router.get('/', getAllTodos)

//Get a singular Todo
router.get('/:id', getTodo)

//Post a new Todo
router.post('/', createTodo)

// Delete a Todo
router.delete('/:id', deleteTodo)

// Update a Todo
router.put('/:id', updateTodo)
module.exports = router