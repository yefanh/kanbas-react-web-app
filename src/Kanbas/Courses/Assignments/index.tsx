//kanbas-react-web-app/src/Kanbas/Courses/Assignments/index.tsx
// import { useParams } from "react-router";  // import the useParams hook
import { useParams } from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButton from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentItem from "./AssignmentItem";
import { useEffect } from "react";
import * as assignmentsClient from "./client";
import { setAssignments, deleteAssignment } from "./reducer";

export default function Assignments() {
  // use the useParams hook to get the course id
  // const { cid } = useParams();
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ); // get the assignments from the store
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;
  

  // get the assignments for the course
  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    // make sure the assignments is an array
    const assignmentsArray = Array.isArray(assignments) ? assignments : [];
    // dispatch(setAssignments(assignments));
    dispatch(setAssignments(assignmentsArray));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  //delete assignment
  const removeAssignment = async (assignmentId: string) => {
    console.log("Deleting assignment with ID:", assignmentId); //debugging!!
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  // if the assignments is not an array, return a message
  if (!Array.isArray(assignments)) {
    return <div>assignments data is loading or unavailable...</div>;
  }

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
            {(role === "FACULTY"|| role === "ADMIN") && <AssignmentsControlButton />}
          </div>

          <ul id="wd-assignments-list" className="list-group rounded-0">
            {/* dynamically render the assignments */}
            {assignments.map((assignment: any) => (
              <AssignmentItem
                key={assignment._id}
                id={assignment._id} 
                title={assignment.title}
                modules="Multiple Modules"
                availability="To be defined"  // here you can fill in the specific time information as needed
                dueDate="To be defined"        // here you can fill in the specific time information as needed
                points={assignment.points || "100"}     
                link={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                deleteAssignment={removeAssignment}
              />
            ))}
          </ul>
        </li>
      </ul>

    </div>
  );
}