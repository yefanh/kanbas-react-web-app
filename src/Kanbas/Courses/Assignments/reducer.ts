// src/Kanbas/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; 

// initial state
const initialState = {
  assignments: assignments,
};

// create assignments slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // add assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        course: assignment.course, // add course id
        ...assignment,
      };
      console.log("addAssignment: newAssignment =", newAssignment);
      state.assignments = [...state.assignments, newAssignment];
    },
    // delete assignment
    deleteAssignment: (state, action) => {
      const assignmentId = action.payload;
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    // update assignment
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    }
  },
});

// export actions and reducer
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;