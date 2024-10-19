// src/Kanbas/Courses/Assignments/index.tsx
import { useParams } from "react-router";  // import the useParams hook
import * as db from "../../Database";  // import the database
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButton from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentItem from "./AssignmentItem";

export default function Assignments() {
  // use the useParams hook to get the course id
  const { cid } = useParams();
  
  // get the assignments from the database
  const assignments = db.assignments;

  // filter the assignments based on the course id
  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  return (
    <div className="container">
      {/* Assignments Controls bar */}
      <AssignmentsControls /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentsControlButton />
          </div>

          <ul id="wd-assignments-list" className="list-group rounded-0">
            {/* 动态渲染 filteredAssignments */}
            {filteredAssignments.map((assignment: any) => (
              <AssignmentItem
                key={assignment._id}
                title={assignment.title}
                modules="Multiple Modules"
                availability="To be defined"  // 这里可以根据需要填充具体的时间信息
                dueDate="To be defined"        // 这里可以根据需要填充具体的时间信息
                points="100"                   // 假设每个作业都是 100 分，可以根据需要调整
                link={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              />
            ))}
          </ul>
        </li>
      </ul>

    </div>
  );
}
