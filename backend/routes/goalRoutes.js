import express from "express";
import {
  readGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";

const router = express.Router();

router.route("/").get(readGoals).post(createGoal);
router.route("/:id").patch(updateGoal).delete(deleteGoal);

export default router;
