const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const todo = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    toFinishBy:{
        type: Date,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Todo', todo);