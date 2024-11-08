// src/Kanbas/Account/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
  courseId?: string; // add new courseId property
}

export default function ProtectedRoute({ children, courseId }: ProtectedRouteProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  // change the condition to check if the user is not logged in
  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  // if the courseId is provided and the user is a student
  if (courseId && currentUser.role === "STUDENT") {
    const isEnrolled = enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

    // if the user is not enrolled in the course, redirect to the dashboard
    if (!isEnrolled) {
      return <Navigate to="/Kanbas/Dashboard" />;
    }
  }

  // if the user is logged in and the courseId is not provided or the user is an instructor
  return children;
}
