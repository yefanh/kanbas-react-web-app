// src/Kanbas/Dashboard.tsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      {/* Dashboard title */}
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/* Published courses section */}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/javascript.jpg" width={200} alt="JavaScript" />
            <div>
              <h5>CS5678 JavaScript</h5>
              <p className="wd-dashboard-course-title">Introduction to JavaScript</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/*course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/images/python.jpg" width={200} alt="Python" />
            <div>
              <h5>CS9101 Python Programming</h5>
              <p className="wd-dashboard-course-title">Basics of Python</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/*course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1213/Home">
            <img src="/images/java.jpg" width={200} alt="Java" />
            <div>
              <h5>CS1213 Java Development</h5>
              <p className="wd-dashboard-course-title">Advanced Java Techniques</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/*course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1516/Home">
            <img src="/images/database.jpg" width={200} alt="Database" />
            <div>
              <h5>CS1516 Database Systems</h5>
              <p className="wd-dashboard-course-title">Introduction to Databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/*course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1819/Home">
            <img src="/images/ml.jpg" width={200} alt="Machine Learning" />
            <div>
              <h5>CS1810 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Basics of Machine Learning</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/*course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2122/Home">
            <img src="/images/data_science.jpg" width={200} alt="Data Science" />
            <div>
              <h5>CS2122 Data Science</h5>
              <p className="wd-dashboard-course-title">Introduction to Data Science</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>

    </div>
  );
}
