// src/Kanbas/Courses/Assignments/AssignmentsControls.tsx
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom"; 

export default function AssignmentsControls() {
  const { cid: courseId } = useParams();
  console.log("AssignmentsControls: courseId =", courseId);
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {/* Search Input */}
      <div className="input-group w-50">
        <span className="input-group-text"><FaSearch /></span>
        <input
          type="text"
          className="form-control"
          id="wd-search-assignment"
          placeholder="Search for Assignments"
        />
      </div>
      {/* Group and Assignment Buttons */}
      <div>
        <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
          <FaPlus className="me-1" /> Group
        </button>

        <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor`} className="btn btn-danger">
          <FaPlus className="me-1" /> Assignment
        </Link>

      </div>
    </div>
  );
}
