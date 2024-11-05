//src/Kanbas/Courses/Assignments/AssignmentControlButtons.tsx
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; 
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControlButton() {
  const { cid } = useParams(); 
  console.log("AssignmentsControlButton: cid =", cid);
  return (
    <div className="float-end">
       <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor`} className="text-decoration-none">
        <BsPlus className="fs-4 text-dark" />
      </Link>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}