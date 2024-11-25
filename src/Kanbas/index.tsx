// src/Kanbas/index.tsx
import { Routes, Route, Navigate, useParams } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
// import * as db from "./Database";
import { useState, useEffect  } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  // const [courses, setCourses] = useState<any[]>(db.courses);
  const [mycourses, setCourses] = useState<any[]>([]);

  const [allCourses, setAllCourses] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer); 

  const fetchCourses = async () => {
      try {
        const mycourses = await userClient.findMyCourses();
        setCourses(mycourses);

        const courses = await courseClient.fetchAllCourses();
        setAllCourses(courses);

      } catch (error) {
        console.error(error);
      }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    // const newCourse = { ...course,
    //                     _id: new Date().getTime().toString() };
    setCourses([...mycourses, newCourse ]);
  };

  const deleteCourse = async (courseId: string) => {
    try {
      const status = await courseClient.deleteCourse(courseId);
      // verify that the status code is 204
      if (status === 204) {
        // after deleting the course, update the state
        setCourses(mycourses.filter((course) => course._id !== courseId));
      } else {
        // if the status code is not 204, log an error and alert the user
        console.error("Failed to delete course on server. Status:", status);
        alert("Failed to delete course. Please try again.");
      }
    } catch (error) {
      // catch any errors that occur during the deletion process
      console.error("Error occurred while deleting course:", error);
      alert("An error occurred while deleting the course. Please try again.");
    }
  };
  
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      mycourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  // Wrapper component to extract the `cid` parameter and pass it to `ProtectedRoute`
  const CourseRoute = () => {
    const { cid } = useParams(); // Extract `cid` parameter
    return (
      <ProtectedRoute courseId={cid}>
        <Courses courses={mycourses} />
      </ProtectedRoute>
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />

              <Route path="/Dashboard" element={
                <ProtectedRoute>
                  <Dashboard
                    mycourses={mycourses}
                    allCourses={allCourses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    fetchCourses={fetchCourses}
                  />
                </ProtectedRoute>
              } /> 

              {/* Use CourseRoute here */}
              <Route path="/Courses/:cid/*" element={<CourseRoute />} />

              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>    
      </div>
    </Session>
  );
}
