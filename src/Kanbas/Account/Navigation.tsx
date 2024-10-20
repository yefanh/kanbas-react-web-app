// src/Kanbas/Account/Navigation.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AccountNavigation() {
  // useState to keep track of the active link
  const [activeLink, setActiveLink] = useState("Signin");

  // Array of links for Account Navigation
  const links = ["Signin", "Signup", "Profile"];

  // Function to handle link clicks
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName); // set the active link
  };

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {/* Dynamically rendering the links */}
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${activeLink === link ? "active" : "text-danger"} border border-0`}
          onClick={() => handleLinkClick(link)}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
