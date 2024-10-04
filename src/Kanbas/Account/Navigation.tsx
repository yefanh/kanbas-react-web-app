// src/Kanbas/Account/Navigation.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AccountNavigation() {
  // useState to keep track of the active link
  const [activeLink, setActiveLink] = useState("Signin");

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName); // set the active link
  };

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {/* Navigation links for the Account section */}
      <Link
        to={`/Kanbas/Account/Signin`}
        className={`list-group-item ${activeLink === "Signin" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Signin")}
      >
        Signin
      </Link>
      <br />

      <Link
        to={`/Kanbas/Account/Signup`}
        className={`list-group-item ${activeLink === "Signup" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Signup")}
      >
        Signup
      </Link>
      <br />

      <Link
        to={`/Kanbas/Account/Profile`}
        className={`list-group-item ${activeLink === "Profile" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Profile")}
      >
        Profile
      </Link>
      <br />
    </div>
  );
}
