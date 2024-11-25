//src/Kanbas/Courses/Home/index.tsx
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      {/*  fix module css */}
      <div className="flex-fill">
        <Modules />
      </div>
      {/*  fix the coursestatus css */}
      <div className="flex-grow-0 wd-status d-none d-md-block me-5" style={{"width": "250px"}}> 
            <CourseStatus />
      </div>
    </div>
  );
}
