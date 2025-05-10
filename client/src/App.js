import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./components/Home";
//import UpdateProfile from "./components/UpdateProfile";
//import UpdatePassword from "./components/UpdatePassword";

import DailyLog from "./components/DailyLog";
import CreateGoal from "./components/CreateGoal";
import GoalTracker from "./components/GoalTracker";
import AiSuggestions from "./components/AiSuggestions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/*<Route path="/update-profile" element={<UpdateProfile />} />
         <Route path="/update-password" element={<UpdatePassword />} />*/}
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/create-goal" element={<CreateGoal />} />
        <Route path="/goal-tracker" element={<GoalTracker />} />
        <Route path="/ai-suggestions" element={<AiSuggestions />} />
      </Routes>
    </Router>
  );
}
