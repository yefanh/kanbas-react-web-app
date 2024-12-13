//kanbas-react-web-app/src/Kanbas/Courses/Assignments/Editor.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  const courseId = cid!;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get the current user
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;

  // call the useSelector hook to get the assignments
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [title, setTitle] = useState(existingAssignment ? existingAssignment.title : '');
  const [description, setDescription] = useState(existingAssignment ? existingAssignment.description : '');
  const [points, setPoints] = useState(existingAssignment ? existingAssignment.points : 100);
  const [dueDate, setDueDate] = useState(existingAssignment ? existingAssignment.dueDate : '');
  const [availableFrom, setAvailableFrom] = useState(existingAssignment ? existingAssignment.availableFrom : '');
  const [availableUntil, setAvailableUntil] = useState(existingAssignment ? existingAssignment.availableUntil : '');

  useEffect(() => {
    if (existingAssignment) {
      setTitle(existingAssignment.title);
      setDescription(existingAssignment.description);
      setPoints(existingAssignment.points);
      setDueDate(existingAssignment.dueDate);
      setAvailableFrom(existingAssignment.availableFrom);
      setAvailableUntil(existingAssignment.availableUntil);
    }
  }, [existingAssignment]);

  // // if the user is not a faculty member, redirect to the assignments page
  // if (role !== "FACULTY") {
  //   return <Navigate to={`/Kanbas/Courses/${courseId}/Assignments`} />;
  // }

  // handle the save button click
  const handleSave = async () => {
    //update the existing assignment
    if (existingAssignment) {
      const updatedAssignment = {
        _id: existingAssignment._id,
        course: courseId,
        title,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
      };
    await assignmentsClient.updateAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
    } else {
      // create a new assignment
      const newAssignment = {
        title,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
        course: courseId,
      };
      const createdAssignment = await assignmentsClient.createAssignmentForCourse(courseId, newAssignment);
      console.log("Created Assignment:", createdAssignment);
      dispatch(addAssignment(createdAssignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <label htmlFor="wd-name" className="form-label">
        <h5>{title || "Assignment name"}</h5> 
      </label>
      <input
        id="wd-name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Assignment"
        className="form-control mb-4"
        readOnly = {role !== "FACULTY" && role !== "ADMIN"}
      />

      {/* Assignment Description */}
      <label htmlFor="wd-description" className="form-label">
        <h5>Description</h5>
      </label>
      <textarea
        id="wd-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-4"
        placeholder="New Assignment Description"
        style={{ height: 'auto', whiteSpace: 'pre-wrap' }}
        readOnly = {role !== "FACULTY" && role !== "ADMIN"}
      />


      {/* Assignment Points */}
      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-9">
          <input
            id="wd-points"
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            className="form-control mb-3"
            readOnly = {role !== "FACULTY" && role !== "ADMIN"}
          />
        </div>
      </div>

      {/* Assign Dates */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign
          </label>
        </div>
        <div className="col-md-9">
          <div className="border p-3 rounded">
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">
                Due
              </label>
              <input
                id="wd-due-date"
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                readOnly = {role !== "FACULTY" && role !== "ADMIN"}
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="datetime-local"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  className="form-control"
                  readOnly = {role !== "FACULTY" && role !== "ADMIN"}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                  className="form-control"
                  readOnly = {role !== "FACULTY" && role !== "ADMIN"} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Action Buttons */}
      <div className="text-end mt-3">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}