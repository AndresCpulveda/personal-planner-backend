import Task from "../models/tasks.js";

const addTask = async (req, res) => {
  const newTask = new Task(req.body)
  try {
    const savedTask = await newTask.save()
    res.json(savedTask)
  } catch (error) {
    console.log(error);
  }
}

const getTodaysTasks = async (req, res) => {
  const currentDate = new Date();
  const startOfDay = currentDate.toISOString().split('T')[0]
  try {
    const todaysTasks = await Task.find({ due: startOfDay });
    res.json(todaysTasks);
  } catch (error) {
    
  }
}

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find()
    res.json(allTasks)
  } catch (error) {
    console.log(error);
  }
}

const updateTask = async (req, res) => {
  const {_id, name, due, priority, time, completed} = req.body;
  const toUpdate = await Task.findById(_id)

  toUpdate.name = name || toUpdate.name
  toUpdate.due = due || toUpdate.due
  toUpdate.priority = priority || toUpdate.priority
  toUpdate.time = time || toUpdate.time
  toUpdate.completed = completed || toUpdate.completed
  try {
    const updated = await toUpdate.save()
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
}

const deleteTask = async (req, res) => {
  const {_id} = req.params;
  const toRemove = await Task.findById(_id)
  if(!toRemove) {
    return res.status(404).json({msg: 'Record not found'})
  }
  try {
    await toRemove.deleteOne()
    res.json(toRemove)
  } catch (error) {
    console.log(error);
  }
}

export {addTask, getTodaysTasks, updateTask, deleteTask, getAllTasks}