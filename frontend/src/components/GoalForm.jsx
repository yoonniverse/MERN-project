import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal, updateGoal } from "../features/goals/goalsSlice";

const GoalForm = ({ orig = null }) => {
  const dispatch = useDispatch();
  const initGoalData = { text: "", ...orig };
  const [goalData, setGoalData] = useState(initGoalData);

  const handleChange = (e) => {
    setGoalData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (orig) {
      dispatch(updateGoal(goalData));
    } else {
      dispatch(createGoal(goalData));
    }
    setGoalData(initGoalData);
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={goalData.text}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            {orig ? "Edit" : "Add"} Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
