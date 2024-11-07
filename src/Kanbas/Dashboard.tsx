// src/Kanbas/Dashboard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { addEnrollment, removeEnrollment } from "./Enrollments/reducer";

// define Course interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  facultyId?: string; //add facultyId
}

// define Enrollment interface
interface Enrollment {
  _id?: string; // _id is optional
  user: string;
  course: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();

  // useState hooks to manage courses and course state
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState<Course>({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    department: "",
    credits: 0,
    description: "",
    facultyId: "", // initialize facultyId
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);

  // define addNewCourse function
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
      facultyId: currentUser._id, // set facultyId as currentUser._id
    };
    setCourses([...courses, newCourse]);
    // clear course form
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      department: "",
      credits: 0,
      description: "",
      facultyId: currentUser._id, // reset facultyId
    });
  };

  // define deleteCourse function
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // define updateCourse function
  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
    // clear course form
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      department: "",
      credits: 0,
      description: "",
      facultyId: currentUser._id,
    });
  };

  // define handleEnroll function
  function handleEnroll(courseId: string) {
    const newEnrollment: Enrollment = { user: currentUser._id, course: courseId };
    dispatch(addEnrollment(newEnrollment));
  }

  function handleUnenroll(courseId: string) {
    dispatch(removeEnrollment(courseId));
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* student user's enrollments button */}
      {currentUser && currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "Enrollments"}
        </button>
      )}

      {/* faculty user's new course form */}
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

          {/* clear course form */}
          <input
            value={course.name}
            className="form-control mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control mb-2"
            placeholder="Course Number"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            placeholder="Course Description"
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
                // student: show all courses or only enrolled courses
                if (showAllCourses) {
                  return true; // show all courses
                } else {
                  // just show enrolled courses
                  return enrollments.some(
                    (enrollment: Enrollment) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  );
                }
              } else if (currentUser.role === "FACULTY") {
                // faculty: show only faculty's courses
                return course.facultyId === currentUser._id;
              } else {
                // other roles: show all courses
                return false;
              }
            })
            .map((course) => {
              const isEnrolled = enrollments.some(
                (enrollment: Enrollment) =>
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

                        {/* include enroll/unenroll buttons */}
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
                            {/* delete button */}
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

                            {/* edit button */}
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