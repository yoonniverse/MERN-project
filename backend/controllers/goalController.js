import asyncHandler from "express-async-handler";

// @desc Read goals
// @route GET /api/goals
// @access Private
export const readGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Read goals" });
});

// @desc Create goal
// @route POST /api/goals
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Create goal" });
});

// @desc Update goal
// @route PATCH /api/goals
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
