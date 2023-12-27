"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./auth.css";

const signUp = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const onSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("../api/myUsers/Signup", {
        method: "POST",
        body: JSON.stringify({ userData }),
      });
    } catch (error) {
      console.log("Signup failed", error.message);
    }
  };

  const startingUserData = {
    username: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(startingUserData);
  const [active, setActive] = useState(false);
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-util">
          <button
            className={active ? "login-btn active" : "login-btn"}
            onClick={() => {
              setActive(true);
            }}
          >
            Log-In
          </button>
          <button
            className={!active ? "signup-btn active" : "signup-btn"}
            onClick={() => {
              setActive(false);
            }}
          >
            Sign-Up
          </button>
        </div>
        <form className="sign-up-form" onSubmit={onSignup} method="post">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required={true}
            value={userData.username}
            onChange={handleChange}
          />
          {!active && (
            <>
              <label>E-Mail</label>
              <input
                type="text"
                name="email"
                id="email"
                required={true}
                value={userData.email}
                onChange={handleChange}
              />
            </>
          )}
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required={true}
            value={userData.password}
            onChange={handleChange}
          />
          <input
            type="submit"
            value={active ? "Log-In" : "Sign-Up"}
            className={active ? "submit-btn-login" : "submit-btn-signup"}
          />
        </form>
      </div>
    </div>
  );
};

export default signUp;
