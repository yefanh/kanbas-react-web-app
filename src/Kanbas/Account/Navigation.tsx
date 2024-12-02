// src/Kanbas/Account/Navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  //if currentUser is not null, display Profile, else display Signin and Signup
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  // // useState to keep track of the active link
  // const [activeLink, setActiveLink] = useState("Signin");
  const [activeLink, setActiveLink] = useState<string>("");
  
  // Function to handle link clicks
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName); // set the active link
  };

  // Get the current pathname from useLocation
  const { pathname } = useLocation();

  // Set the initial active link based on the current pathname
  useEffect(() => {
    const currentPath = links.find((link) => pathname.includes(link)) || (pathname.includes("Users") ? "Users" : "");
    if (currentPath) {
      setActiveLink(currentPath);
    }
  }, [pathname, links]);

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

      {/* Add Users link if the current user is an ADMIN */}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${activeLink === "Users" ? "active" : "text-danger"} border border-0`}
          onClick={() => handleLinkClick("Users")}
        >
          Users
        </Link>
      )}
    </div>
  );
}