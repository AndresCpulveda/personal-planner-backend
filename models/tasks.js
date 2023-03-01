import mongoose from "mongoose";

const tasksSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  due: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true,
})

const Task = mongoose.model('Task', tasksSchema)

export default Task