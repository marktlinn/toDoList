const { default: mongoose } = require('mongoose');
const Todo = require('../models/todosModels')



// get all todos
const getAllTodos = async (req,res)=>{
    try {
        const todos = await Todo.find({}).sort({createdAt: -1});
        res.status(200).json(todos)

    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }

}

// get single todo
const getTodo = async (req,res)=>{
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such todo exists'})
        }
        const todo = await Todo.findById(id)
        if(!todo){
            return res.status(404).json({error: 'No such todo found'})
        }
        res.status(200).json(todo)
    } catch (error) {
        
        res.status(500).json(`Error: ${error.message}`)
    }
}

// create new todo
const createTodo = async (req,res)=>{
    const { title, description, toFinishBy, completed} = req.body;
    try {
        const todo = await Todo.create({title, description, toFinishBy, completed})
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
}
// delete todo

// update todo

module.exports = { getAllTodos, getTodo, createTodo }