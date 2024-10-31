// src/Kanbas/index.tsx
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
        <div  className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />  {/* show account page by default */}
            <Route path="/Account/*" element={<Account />} />  {/* load account component */}
            <Route path="/Dashboard" element={<Dashboard />} />  {/* load dashboard component */}

            <Route path="/Courses" 
              element={ 
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              } 
            />  

            {/* Add Courses route, ":cid" is a dynamic parameter that represents the course 
            ID means When a user clicks on a different course, a different course page is displayed 
            based on this ID*/}
            <Route path="/Courses/:cid/*" element={<Courses courses={courses}/>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>    
    </div>
  );
}
