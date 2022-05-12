import express from "express";
import {
  readGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, readGoals).post(protect, createGoal);
router.route("/:id").patch(protect, updateGoal).delete(protect, deleteGoal);

export default router;
