import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok === false) {
      alert("Registration failed.");
    } else {
      alert("Registration successfull.");
    }
  };

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button> Register </button>
    </form>
  );
};

export default RegisterPage;
