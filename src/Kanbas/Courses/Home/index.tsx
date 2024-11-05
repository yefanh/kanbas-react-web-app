//src/Kanbas/Courses/Home/index.tsx
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div >
        <Modules />
      </div>
      <div className="d-none d-lg-block ms-5">
            <CourseStatus />
      </div>
    </div>
  );
}
