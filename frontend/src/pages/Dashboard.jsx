import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { createGoal, readGoals, reset } from "../features/goals/goalsSlice";

import Spinner from "../components/Spinner";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) {
      dispatch(reset());
      navigate("/login");
    } else {
      dispatch(readGoals());
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isError) toast(message);
  }, [isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
