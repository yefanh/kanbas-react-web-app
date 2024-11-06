// src/Kanbas/Enrollments/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// define Enrollment interface
interface Enrollment {
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

// initialize state, get enrollments from localStorage
const initialState: EnrollmentsState = {
  enrollments: JSON.parse(localStorage.getItem("enrollments") || "[]"),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    // add a new enrollment
    addEnrollment: (state, action: PayloadAction<Enrollment>) => {
      const newEnrollment = action.payload;
      state.enrollments.push(newEnrollment);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); // 更新 localStorage
    },
    // delete an enrollment
    removeEnrollment: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment: Enrollment) => enrollment.course !== courseId
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); // 更新 localStorage
    },
  },
});

//export actions and reducer
export const { addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
