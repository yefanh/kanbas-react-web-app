// src/Kanbas/Account/Signup.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" /><br/>
      <input placeholder="password" type="password" /><br/>
      <input placeholder="verify password" type="password" /><br/>
      {/* Add a link to the Signin page after successful sign up */}
      <Link to="/Kanbas/Account/Profile"> Sign up </Link><br />
      {/* Add a link to the Signin page */}
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
