import express from "express";

import { addTask, getTodaysTasks, completeTask } from "../controllers/tasksController.js";

const tasksRouter = express.Router();

tasksRouter.post('/add', addTask)
tasksRouter.get('/todays', getTodaysTasks)
tasksRouter.put('/complete', completeTask)


export default tasksRouter