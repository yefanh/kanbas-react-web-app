// src/Kanbas/Dashboard.tsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      {/* Dashboard title */}
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/* Published courses section */}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses"  className="row ms-4 mb-4">
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 cols-md-5 g-4">

          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg"  width="100%" height={200} alt="reactjs"/>

              <div  className="card-body">
                <h5  className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className= "wd-dashboard-course-title card-text ">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>

              </Link>
            
            </div>
          
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-cours col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5678/Home">
              <img src="/images/javascript.jpg" width="100%" height={200} alt="JavaScript" />
                
                <div className="card-body">
                  <h5>CS5678 JavaScript</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to JavaScript</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/*course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
              to="/Kanbas/Courses/9101/Home">
                <img src="/images/python.jpg" width="100%" height={200} alt="Python" />
                <div className="card-body">
                  <h5>CS9101 Python Programming</h5>
                  <p className="wd-dashboard-course-title card-text">Basics of Python</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/*course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1213/Home">
                <img src="/images/java.jpg" width="100%" height={200} alt="Java" />
                <div className="card-body">
                  <h5>CS1213 Java Development</h5>
                  <p className="wd-dashboard-course-title card-text">Advanced Java </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/*course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
              to="/Kanbas/Courses/1516/Home">
                <img src="/images/database.jpg" width="100%" height={200} alt="Database" />
                <div className="card-body">
                  <h5>CS1516 Database Systems</h5>
                  <p className="wd-dashboard-course-title card-text">Introduction to Databases</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/*course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
              to="/Kanbas/Courses/1819/Home">
                <img src="/images/ml.jpg" width="100%" height={200} alt="Machine Learning" />
                <div className="card-body">
                  <h5>CS1810 Machine Learning</h5>
                  <p className="wd-dashboard-course-title card-text">Basics of Machine Learning</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/*course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
              to="/Kanbas/Courses/2122/Home">
                <img src="/images/data_science.jpg" width="100%" height={200} alt="Data Science" />
                <div className="card-body">
                  <h5>CS2122 Data Science</h5>
                  <p className="wd-dashboard-course-title card-text">Introduction to Data Science</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}
