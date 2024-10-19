//src/Kanbas/Courses/Navigation.tsx
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function CoursesNavigation() {
  // useState to keep track of the active link
  const [activeLink, setActiveLink] = useState("Home");

  // get courseId from the URL
  const { cid } = useParams(); 

  // array of links
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName); // set activeLink to the linkName
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}  // link to the course page
          className={`list-group-item ${activeLink === link ? "active" : "text-danger"} border border-0`}
          onClick={() => handleLinkClick(link)}  // handle the click event
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
