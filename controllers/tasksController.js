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
  console.log(startOfDay);
  try {
    const todaysTasks = await Task.find({ due: startOfDay });
    res.json(todaysTasks);
  } catch (error) {
    
  }
}

const completeTask = async (req, res) => {
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

export {addTask, getTodaysTasks, completeTask}