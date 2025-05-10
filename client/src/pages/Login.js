import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      alert("Login successful");
      console.log(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Password"
        />
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
}
