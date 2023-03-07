import express from "express";

import { addTask, getTodaysTasks, completeTask, deleteTask } from "../controllers/tasksController.js";

const tasksRouter = express.Router();

tasksRouter.post('/add', addTask)
tasksRouter.get('/todays', getTodaysTasks)
tasksRouter.put('/complete', completeTask)
tasksRouter.delete('/delete/:_id', deleteTask)


export default tasksRouter