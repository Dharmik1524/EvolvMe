import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("Signup successful!");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Name"
        />
        <input
          name="email"
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="form-control my-2"
          placeholder="Password"
        />
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}
