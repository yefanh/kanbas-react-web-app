// src/Kanbas/Account/Navigation.tsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  //if currentUser is not null, display Profile, else display Signin and Signup
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  // useState to keep track of the active link
  const [activeLink, setActiveLink] = useState("Signin");
  
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
