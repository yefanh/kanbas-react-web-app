//kanbas-react-web-app/src/Kanbas/Dashboard.tsx
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
  enrolled?: boolean; 
}

export default function Dashboard(
  { mycourses, 
    allCourses, 
    course, 
    setCourse, 
    addNewCourse, 
    deleteCourse, 
    updateCourse, 
    fetchCourses, 
    enrolling, 
    setEnrolling, 
    updateEnrollment 
     }: {
    mycourses: any[]; 
    allCourses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; 
    fetchCourses: () => void; 
    enrolling: boolean; 
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void 
     }) 
  {  
    
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);
  
  const filteredCourses =
    currentUser.role === "STUDENT" // check if the user is a student
      ? showAllCourses
        ? allCourses // show all courses
        : mycourses  // show only the enrolled courses
      : mycourses; // show courses for non-students

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
            {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />

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

      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published" className="mb-0">
          Published Courses ({allCourses.length})
        </h2>
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {filteredCourses.map((course: Course) => { 
            return (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button onClick={(event) => {
                                  event.preventDefault();
                                  updateEnrollment(course._id, !course.enrolled);
                                }}
                                className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
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