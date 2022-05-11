import asyncHandler from "express-async-handler";
import Goal from "../model/goalModel.js";

// @desc Read goals
// @route GET /api/goals
// @access Private
export const readGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Create goal
// @route POST /api/goals
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  const goal = new Goal(req.body);
  await goal.save();
  res.status(200).json(goal);
});

// @desc Update goal
// @route PATCH /api/goals
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(goal);
});

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  await Goal.findByIdAndRemove(req.params.id);
  res.status(200).json({ id: req.params.id });
});
