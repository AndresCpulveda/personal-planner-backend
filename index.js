import express from "express";
import tasksRouter from "./routes/tasksRouter.js";
import connectDB from "./config/db.js";
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

dotenv.config()

const allowedDomains = [process.env.FRONTEND_URL]
const corsOptions = {
  origin: function (origin, callback) {
    if(allowedDomains.indexOf(origin) !== -1) {
      callback(null, true)
    }else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors())


connectDB();




app.use('/api/tasks', tasksRouter)

app.listen( port, () => {
  console.log(`Server running on port: ${port}`);
})