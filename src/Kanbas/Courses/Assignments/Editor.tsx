import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <label htmlFor="wd-name" className="form-label">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-4" />

     {/* Assignment Description */}
      <label htmlFor="wd-description" className="form-label"><b>Description</b></label>
      <div id="wd-description" className="form-control mb-4" style={{ height: 'auto', whiteSpace: 'pre-wrap' }}>
        <p>
          The assignment is <span className="text-danger">available online</span>.<br />
          Submit a link to the landing page of your Web application running on Netlify.
        </p>
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>
          The Kanbas application should include a link to navigate back to the landing page.
        </p>
      </div>

      {/* Assignment Points */}
      <table className="table">
        <tbody>
          <tr>
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="wd-points" className="form-label">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} className="form-control" />
            </td>
          </tr>

          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" className="form-control">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="project">PROJECT</option>
              </select>
            </td>
          </tr>

          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" className="form-control">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="complete/incomplete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            </td>

            <td>
              <select id="wd-submission-type" className="form-control mb-2">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="none">No Submission</option>
              </select>

              {/* Online Entry Options */}
              <label className="form-label">Online Entry Options</label><br />
              <div className="form-check">
                <input type="checkbox" id="text-entry" className="form-check-input" />
                <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="website-url" className="form-check-input" />
                <label htmlFor="website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="media-recordings" className="form-check-input" />
                <label htmlFor="media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="student-annotation" className="form-check-input" />
                <label htmlFor="student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="file-uploads" className="form-check-input" />
                <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
              </div>
            </td>
          </tr>

          {/* Assign Section */}
          <tr>
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="text-entry" className="form-label">Assign</label><br />
            </td>

            <td>
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label><br />
              <input id="wd-assign-to" value="Everyone" className="form-control mb-2" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="wd-due-date" className="form-label">Due</label><br />
            </td>
            <td>
              <input id="wd-due-date" type="datetime-local" value="2024-05-13T23:59" className="form-control mb-2" />
            </td>
          </tr>

          <tr>
            {/* Available From and Until on the same row */}
            <td align="right" valign="top" className="pe-3">
              <label htmlFor="wd-available-from" className="form-label">Available from</label><br />
              <input id="wd-available-from" type="datetime-local" value="2024-05-06T00:00" className="form-control mb-2" />  
            </td>
            <td>
              <label htmlFor="wd-available-until" className="form-label">Until</label><br />
              <input id="wd-available-until" type="datetime-local" value="2024-05-20T00:00" className="form-control mb-2" />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      {/* Action Buttons */}
      <div className="text-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}
