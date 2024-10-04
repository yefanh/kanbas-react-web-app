import { Link } from "react-router-dom";
import { useState } from "react";

export default function CoursesNavigation() {
  // useState to keep track of the active link
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName); // set activeLink to the linkName
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        className={`list-group-item ${activeLink === "Home" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Home")}  // when clicked, set activeLink to Home
      >
        Home
      </Link>

      <Link
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        className={`list-group-item ${activeLink === "Modules" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Modules")}  // when clicked, set activeLink to Modules
      >
        Modules
      </Link>

      <Link
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        className={`list-group-item ${activeLink === "Piazza" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Piazza")}  // when clicked, set activeLink to Piazza
      >
        Piazza
      </Link>

      <Link
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        className={`list-group-item ${activeLink === "Zoom" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Zoom")}  // when clicked, set activeLink to Zoom
      >
        Zoom
      </Link>

      <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Assignments"
        className={`list-group-item ${activeLink === "Assignments" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Assignments")}  // when clicked, set activeLink to Assignments
      >
        Assignments
      </Link>

      <Link
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className={`list-group-item ${activeLink === "Quizzes" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Quizzes")}  // when clicked, set activeLink to Quizzes
      >
        Quizzes
      </Link>

      <Link
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        className={`list-group-item ${activeLink === "Grades" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("Grades")}  // when clicked, set activeLink to Grades
      >
        Grades
      </Link>

      <Link
        id="wd-course-people-link"
        to="/Kanbas/Courses/1234/People"
        className={`list-group-item ${activeLink === "People" ? "active" : "text-danger"} border border-0`}
        onClick={() => handleLinkClick("People")}  // when clicked, set activeLink to People
      >
        People
      </Link>
    </div>
  );
}
