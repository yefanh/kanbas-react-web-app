//kanbas-react-web-app/src/Kanbas/Dashboard.tsx
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { enrollCourse, unenrollCourse } from "./Enrollments/reducer";
import * as enrollmentsClient from "./Enrollments/client";

// define the Course interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
}

export default function Dashboard(
  { mycourses, allCourses, course, setCourse, addNewCourse, deleteCourse, updateCourse, fetchCourses }: {
  mycourses: any[]; allCourses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; fetchCourses: () => void;}) 
  {  
  // const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = db;
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  
  const [showAllCourses, setShowAllCourses] = useState(false);

  // change the state of showAllCourses
  const toggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };
  
  const filteredCourses =
    currentUser.role === "STUDENT" // check if the user is a student
      ? showAllCourses
        ? allCourses // show all courses
        : mycourses  // show only the enrolled courses
      : mycourses; // show all courses for non-students

  const handleEnroll = async (courseId: string) => {
    await enrollmentsClient.enrollInCourse(courseId);
    await fetchCourses(); // update mycourses
  };
  
  const handleUnenroll = async (courseId: string) => {
    await enrollmentsClient.unenrollFromCourse(courseId);
    await fetchCourses(); // update mycourses
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser && currentUser.role === "STUDENT" && (
        <button 
          className="btn btn-primary float-end"
          onClick={toggleEnrollments}
        >
          {showAllCourses ? "My Courses" : "Enrollment"}
        </button>
      )}
      <br /><br />

      {currentUser && currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
              <button className="btn btn-primary float-end"
                      id="wd-add-new-course-click"
                      onClick={addNewCourse} > 
                Add 
              </button>

              <button className="btn btn-warning float-end me-2"
                      onClick={updateCourse} 
                      id="wd-update-course-click">
                Update
              </button>
          </h5><br />

          <input  value={course.name} className="form-control mb-2" 
                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          
          <textarea value={course.description} className="form-control"
                  onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({mycourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {filteredCourses.map((course: Course) => { 
            const isEnrolled = mycourses.some((myCourse: Course) => myCourse._id === course._id);
            return (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>

                      {currentUser && currentUser.role === "FACULTY" && (
                        <>
                          <button onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                  }} className="btn btn-danger float-end"
                                  id="wd-delete-course-click">
                                  Delete
                          </button>

                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        </>
                      )}

                      {currentUser && currentUser.role === "STUDENT" && (
                        <>
                          {isEnrolled ? (
                            <button className="btn btn-danger" 
                                    onClick={(event) => {
                                      event.preventDefault(); // prevent Link default behavior
                                      handleUnenroll(course._id);
                                    }}>
                              Unenroll
                            </button>
                          ) : (
                            <button className="btn btn-success" 
                                    onClick={(event) => {
                                      event.preventDefault(); // prevent Link default behavior
                                      handleEnroll(course._id);
                                    }}>
                              Enroll
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}