// src/Kanbas/Dashboard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { addEnrollment, removeEnrollment } from "./Enrollments/reducer";

// 定义 Course 接口
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  facultyId?: string; // 新增的属性
}

// 定义 Enrollment 接口
interface Enrollment {
  _id?: string; // _id 可选
  user: string;
  course: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();

  // 使用 useState 管理 courses 和 course 状态
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
    facultyId: "", // 初始化 facultyId
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);

  // 定义添加新课程的函数
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
      facultyId: currentUser._id, // 设置 facultyId 为当前用户 ID
    };
    setCourses([...courses, newCourse]);
    // 清空课程表单
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      department: "",
      credits: 0,
      description: "",
      facultyId: currentUser._id, // 重置 facultyId
    });
  };

  // 定义删除课程的函数
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // 定义更新课程的函数
  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
    // 清空课程表单
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

  // 定义选课和退课的函数
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

      {/* 学生用户的“Enrollments”按钮 */}
      {currentUser && currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "Enrollments"}
        </button>
      )}

      {/* 教师用户的新增课程表单 */}
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

          {/* 课程表单 */}
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
                // 学生：显示所有课程或仅显示已选课程
                if (showAllCourses) {
                  return true; // 显示所有课程
                } else {
                  // 仅显示学生已选的课程
                  return enrollments.some(
                    (enrollment: Enrollment) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  );
                }
              } else if (currentUser.role === "FACULTY") {
                // 教师：显示自己教授的课程
                return course.facultyId === currentUser._id;
              } else {
                // 其他角色：根据需要调整
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

                        {/* 根据用户角色和状态显示按钮 */}
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
                            {/* 删除按钮 */}
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

                            {/* 编辑按钮 */}
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