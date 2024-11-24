//kanbas-react-web-app/src/Kanbas/Courses/Assignments/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 定义 Assignment 接口
interface Assignment {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  // 根据需要添加其他字段
}

// 定义状态接口
interface AssignmentsState {
  assignments: Assignment[];
}

// initial state
const initialState: AssignmentsState = {
  assignments: [],
};

// create assignments slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // set assignments
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    // add assignment
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = [...state.assignments, action.payload];
    },
    // delete assignment
    deleteAssignment: (state, action: PayloadAction<string>) => {
      const assignmentId = action.payload;
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    // update assignment
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const updatedAssignment = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    },
  },
});

// export actions and reducer
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
