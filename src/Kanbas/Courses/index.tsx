//kanbas-react-web-app/src/Kanbas/Courses/index.tsx
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from "./People/Table";

export default function Courses({ courses }: { courses: any[]; }) { // don't load courses from Database accept courses from Kanbas
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);  // find the course by its ID
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}
        </h2>
        
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        {/* make the main content area fill the remaining space!!! */}
        <div className="flex-fill">   
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/Editor" element={<AssignmentEditor />} />

              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
        </div>
      </div>
    </div>
  
);}
