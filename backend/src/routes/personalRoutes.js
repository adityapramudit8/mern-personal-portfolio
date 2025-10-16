import express from "express"
import { getDataPersonal, updateDataPersonal } from "../controllers/personalController.js"

const router = express.Router()

router.get("/", getDataPersonal)
router.put("/:id", updateDataPersonal)

export default router