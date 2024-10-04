// src/Kanbas/Courses/Assignments/AssignmentItem.tsx
import { BsGripVertical } from "react-icons/bs";
import SingleAssignmentButton from "./SingleAssignmentButton";
import { LuFileEdit } from "react-icons/lu";

export default function AssignmentItem({ title, modules, availability, dueDate, points, link } : 
  { title: string; modules: string; availability: string; dueDate: string; points: string; link: string;}) {
  return (
    <li className="wd-assignment-item list-group-item p-3 d-flex align-items-center gap-3">
      {/* left side button*/}
      <div className="d-flex align-items-center gap-2">
        <BsGripVertical className="fs-5 text-muted" />
        <LuFileEdit className="fs-5 text-success" />
      </div>
      
      {/* middle content */}
      <div className="flex-grow-1">
        <a href={link} className="text-decoration-none text-dark">
        <h5 className="mb-1">{title}</h5> </a>
        <p className="text-muted mb-1">
          <span className="text-danger">{modules}</span> | <b>Not available until</b> {availability}
        </p>
        <p className="mb-0">Due {dueDate} | {points} pts</p>
      </div>
      
      {/* right side button*/}
      <div className="d-flex align-items-center">
        <SingleAssignmentButton />
      </div>
    </li>
  );
}
