// src/Kanbas/Account/index.tsx
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Profile from "./Profile";  
import Signup from "./Signup";

export default function Account() {
  return (
    <div id="wd-account-screen">
      {/* Create a table layout for the account section */}
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            {/* Define routes for Signin, Profile, and Signup */}
            <Routes>
              {/* Redirect to Signin by default */}
              <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
