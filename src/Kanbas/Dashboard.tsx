//src/Kanbas/Dashboard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./Database";

// Define the Course interface
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

// Define the Enrollment interface
interface Enrollment {
  _id?: string; // Make _id optional
  user: string;
  course: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  // Use state to manage enrollments
  const [enrollmentsState, setEnrollmentsState] = useState<Enrollment[]>(enrollments);
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Define the handleEnroll function
  function handleEnroll(courseId: string) {
    const newEnrollment: Enrollment = {
      user: currentUser._id,
      course: courseId,
    };
    setEnrollmentsState([...enrollmentsState, newEnrollment]);
  }

  // Define the handleUnenroll function
  function handleUnenroll(courseId: string) {
    const updatedEnrollments = enrollmentsState.filter(
      (enrollment) =>
        !(
          enrollment.user === currentUser._id &&
          enrollment.course === courseId
        )
    );
    setEnrollmentsState(updatedEnrollments);
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* Add "Enrollments" button */}
      {currentUser && currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}

      {currentUser && currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>

            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />

          {/* Add input elements for each field in the course state variable */}
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {
              if (currentUser.role === "STUDENT") {
                if (showAllCourses) {
                  // Show all courses
                  return true;
                } else {
                  // Show only enrolled courses
                  return enrollmentsState.some(
                    (enrollment) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  );
                }
              } else if (currentUser.role === "FACULTY") {
                // Faculty sees all courses
                return enrollmentsState.some(
                  (enrollment) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                );
              }
              // Other roles, adjust as needed
              return false;
            })
            .map((course) => {
              // Determine if the student is enrolled in the course
              const isEnrolled = enrollmentsState.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              );

              return (
                <div
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                  key={course._id}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img
                        src="/images/reactjs.jpg"
                        width="100%"
                        height={160}
                      />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>

                        <button className="btn btn-primary"> Go </button>

                        {/* Display "Enroll" or "Unenroll" button based on enrollment status */}
                        {currentUser && currentUser.role === "STUDENT" && (
                          <>
                            {isEnrolled ? (
                              <button
                                className="btn btn-danger"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleUnenroll(course._id);
                                }}
                              >
                                Unenroll
                              </button>
                            ) : (
                              <button
                                className="btn btn-success"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleEnroll(course._id);
                                }}
                              >
                                Enroll
                              </button>
                            )}
                          </>
                        )}

                        {currentUser && currentUser.role === "FACULTY" && (
                          <>
                            {/* Delete button */}
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>

                            {/* Edit button */}
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
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