import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SiQwiklabs } from "react-icons/si";

export default function KanbasNavigation() {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="90px" />
      </a>

      {/* Account Link */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Account" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => setActiveLink("Account")}
      >
        <FaRegCircleUser className="fs-1 text-danger" />
        <br />
        Account
      </Link>

      {/* Dashboard Link */}
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Dashboard" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => setActiveLink("Dashboard")}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>

      {/* Courses Link */}
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Courses" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => setActiveLink("Courses")}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      {/* Calendar Link */}
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Calendar" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => setActiveLink("Calendar")}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>

      {/* Inbox Link */}
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Inbox" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => setActiveLink("Inbox text-danger")}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      {/* Labs Link */}
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Labs" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => setActiveLink("Labs")}
      >
        <SiQwiklabs className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
