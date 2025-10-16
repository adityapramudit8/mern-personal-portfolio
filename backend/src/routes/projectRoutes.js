import express from "express"
import { getAllProject, getDetailProjectList, createProjectList, updateProjectList } from "../controllers/projectController.js"

const router = express.Router()

router.get("/", getAllProject)
router.get("/:id", getDetailProjectList)
router.post("/", createProjectList)
router.put("/:id", updateProjectList)

export default router