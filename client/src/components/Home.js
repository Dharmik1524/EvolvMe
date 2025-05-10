import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-4">
        <span className="navbar-brand">EvolvMe Dashboard</span>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button
                className="dropdown-item"
                onClick={() => navigate("/update-profile")}
              >
                Update Profile
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => navigate("/update-password")}
              >
                Change Password
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Options */}
      <div className="container mt-5">
        <div className="list-group">
          <button
            className="list-group-item list-group-item-action"
            onClick={() => navigate("/daily-log")}
          >
            Daily Log
          </button>
          <button
            className="list-group-item list-group-item-action"
            onClick={() => navigate("/create-goal")}
          >
            Create Goal
          </button>
          <button
            className="list-group-item list-group-item-action"
            onClick={() => navigate("/goal-tracker")}
          >
            Goal Tracker
          </button>
          <button
            className="list-group-item list-group-item-action"
            onClick={() => navigate("/ai-suggestions")}
          >
            AI Suggestions for Improvement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
