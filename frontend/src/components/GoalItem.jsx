import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteGoal, updateGoal } from "../features/goals/goalsSlice";

import GoalForm from "./GoalForm";

export default function GoalItem({ goal }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button
        className="close"
        onClick={() => {
          dispatch(deleteGoal(goal._id));
        }}
      >
        X
      </button>
      <button
        className="edit"
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}
      >
        Edit
      </button>
      {isEdit && <GoalForm orig={goal} />}
    </div>
  );
}
