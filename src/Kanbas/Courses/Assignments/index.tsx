// src/Kanbas/Courses/Assignments/index.tsx
import { useParams } from "react-router";  // import the useParams hook
import { useSelector } from "react-redux"; // 引入 useSelector
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButton from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentItem from "./AssignmentItem";

export default function Assignments() {
  // use the useParams hook to get the course id
  const { cid } = useParams();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ); // 从 Redux Store 获取作业列表

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;
  

  // filter the assignments based on the course id
  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  return (
    <div className="container">
      qwe
      {/* Assignments Controls bar */}
      <AssignmentsControls /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS
            {role === "FACULTY" && <AssignmentsControlButton />}
          </div>

          <ul id="wd-assignments-list" className="list-group rounded-0">
            {/* dynamically render the assignments */}
            {filteredAssignments.map((assignment: any) => (
              <AssignmentItem
                key={assignment._id}
                id={assignment._id} 
                title={assignment.title}
                modules="Multiple Modules"
                availability="To be defined"  // here you can fill in the specific time information as needed
                dueDate="To be defined"        // here you can fill in the specific time information as needed
                points="100"                   // assign the default value of 100 points
                link={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              />
            ))}
          </ul>
        </li>
      </ul>

    </div>
  );
}