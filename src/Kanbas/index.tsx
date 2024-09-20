// src/Kanbas/index.tsx
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          {/* Navigation for Kanbas on left */}
          <td valign="top">
            <KanbasNavigation />
          </td>

          {/* Routes for Kanbas on right */}
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />  {/* show account page by default */}
              <Route path="/Account/*" element={<Account />} />  {/* load account component */}
              <Route path="/Dashboard" element={<Dashboard />} />  {/* load dashboard component */}
              {/* Add Courses route, ":cid" is a dynamic parameter that represents the course 
              ID means When a user clicks on a different course, a different course page is displayed 
              based on this ID*/}
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>   
        </tr>
      </table>
    </div>
  );
}
