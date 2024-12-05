// src/Kanbas/Courses/People/Table.tsx
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import * as db from "../../Database";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";
import { findUsersForCourse } from "../../Courses/client";

interface PeopleTableProps {
  users?: any[]; // 可选的 users 属性
}

export default function PeopleTable({ users }: PeopleTableProps) {
  const { cid } = useParams<{ cid: string }>(); // 获取课程 ID
  const [stateUsers, setStateUsers] = useState<any[]>(users || []);

  useEffect(() => {
    // 如果没有传入 users 属性，且存在 cid，则获取课程的用户列表
    if (!users && cid) {
      const fetchUsersForCourse = async () => {
        try {
          const enrolledUsers = await findUsersForCourse(cid);
          setStateUsers(enrolledUsers);
        } catch (error) {
          console.error("Failed to fetch users for course:", error);
        }
      };
      fetchUsersForCourse();
    }
  }, [users, cid]);

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
        {stateUsers
          .map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div> );}