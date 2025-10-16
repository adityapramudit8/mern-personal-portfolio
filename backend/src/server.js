import express from "express"
import personalRoutes from "./routes/personalRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"

const app = express()
const PORT = process.env.PORT || 2001
dotenv.config()
connectDB()


app.use(express.json())
app.use("/api/personal", personalRoutes)
app.use("/api/project", projectRoutes)

app.listen(2001, () => {
  console.log("Server running on PORT:", PORT)
})
