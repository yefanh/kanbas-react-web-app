// src/Kanbas/Courses/Assignments/index.tsx
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButton from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentItem from "./AssignmentItem";

export default function Assignments() {
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
        <AssignmentItem 
          title="A1" 
          modules="Multiple Modules" 
          availability="May 6 at 12:00am"
          dueDate="May 13 at 11:59pm" 
          points="100" 
          link="#/Kanbas/Courses/1234/Assignments/123" 
        />
        <AssignmentItem 
          title="A2" 
          modules="Multiple Modules" 
          availability="May 13 at 12:00am"
          dueDate="May 20 at 11:59pm" 
          points="100" 
          link="#/Kanbas/Courses/1234/Assignments/456"
        />
        <AssignmentItem 
          title="A3" 
          modules="Multiple Modules" 
          availability="May 20 at 12:00am"
          dueDate="May 27 at 11:59pm" 
          points="100" 
          link="#/Kanbas/Courses/1234/Assignments/789"
        />
      </ul>
    </li>
  </ul>

    </div>
  );
}

