import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <label htmlFor="wd-name" className="form-label">
        <h3>Assignment Name</h3>
      </label>
      <input
        id="wd-name"
        value="A1 - ENV + HTML"
        className="form-control mb-4"
      />

      {/* Assignment Description */}
      <label htmlFor="wd-description" className="form-label">
        <b>Description</b>
      </label>
      <div
        id="wd-description"
        className="form-control mb-4"
        style={{ height: 'auto', whiteSpace: 'pre-wrap' }}
      >
        <p>
          The assignment is <span className="text-danger">available online</span>
          .<br />
          Submit a link to the landing page of your Web application running on
          Netlify.
        </p>
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>
          The Kanbas application should include a link to navigate back to the
          landing page.
        </p>
      </div>

      {/* Assignment Points */}
      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-9">
          <input id="wd-points" value={100} className="form-control mb-3" />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-select mb-3">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="exams">EXAMS</option>
            <option value="project">PROJECT</option>
          </select>
        </div>
      </div>

      {/* Display Grade As */}
      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-select mb-3">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="complete/incomplete">
              Complete/Incomplete
            </option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="col-md-9">
          <div className="border p-3 rounded mb-4">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
              <option value="none">No Submission</option>
            </select>

            {/* Online Entry Options */}
            <label className="form-label mb-3">Online Entry Options</label>
            <div className="form-check">
              <input
                type="checkbox"
                id="text-entry"
                className="form-check-input"
              />
              <label htmlFor="text-entry" className="form-check-label mb-3">
                Text Entry
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="website-url"
                className="form-check-input"
              />
              <label htmlFor="website-url" className="form-check-label mb-3">
                Website URL
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="media-recordings"
                className="form-check-input"
              />
              <label
                htmlFor="media-recordings"
                className="form-check-label mb-3"
              >
                Media Recordings
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="student-annotation"
                className="form-check-label mb-3"
              >
                Student Annotation
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="file-uploads"
                className="form-check-input"
              />
              <label htmlFor="file-uploads" className="form-check-label mb-3">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign Section */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign
          </label>
        </div>
        <div className="col-md-9">
          <div className="border p-3 rounded">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                value="Everyone"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">
                Due
              </label>
              <input
                id="wd-due-date"
                type="datetime-local"
                value="2024-05-13T23:59"
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="datetime-local"
                  value="2024-05-13T23:59"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  value=""
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Action Buttons */}
      <div className="text-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success btn-danger">Save</button>
      </div>
    </div>
  );
}
