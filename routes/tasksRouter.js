import express from "express";

import { addTask, getTodaysTasks, updateTask, deleteTask, getAllTasks } from "../controllers/tasksController.js";

const tasksRouter = express.Router();

tasksRouter.post('/add', addTask)
tasksRouter.get('/todays', getTodaysTasks)
tasksRouter.get('/all', getAllTasks)
tasksRouter.put('/update', updateTask)
tasksRouter.delete('/delete/:_id', deleteTask)


export default tasksRouter