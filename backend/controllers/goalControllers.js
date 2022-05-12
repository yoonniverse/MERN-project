import asyncHandler from "express-async-handler";
import Goal from "../model/goalModel.js";
import User from "../model/userModel.js";

// @desc Read goals
// @route GET /api/goals
// @access Private
export const readGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc Create goal
// @route POST /api/goals
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  const goal = new Goal({
    text: req.body.text,
    user: req.user.id,
  });
  await goal.save();
  res.status(200).json(goal);
});

// @desc Update goal
// @route PATCH /api/goals
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  if (req.user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error("You are trying to update different user's goal");
  }
  goal.text = req.body.text;
  await goal.save();
  res.status(200).json(goal);
});

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  if (req.user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error("You are trying to delete different user's goal");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
});
