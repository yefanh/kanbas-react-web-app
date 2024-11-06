// src/Kanbas/Courses/CourseProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function CourseProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();

  // check if the user is enrolled in the course
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );

  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}
