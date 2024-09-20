export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name"> <h3>Assignment Name</h3> </label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      
        {/* Assignment Description */}
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your 
        Web application running on Netlify. The landing page should include the following: 
        Your full name and section, Links to each of the lab assignments, Link to the 
        Kanbas application, Links to all relevant source code repositories.
      </textarea>
      <br />

      {/* Assignment Points */}
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        
        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="project">PROJECT</option>
            </select>
          </td>
        </tr>

        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
              <option value="complete/incomplete">Complete/Incomplete</option>
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>

          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
              <option value="none">No Submission</option>
            </select><br />

            {/* Online Entry Options put in a same table as checkboxes */}
            <label htmlFor="text-entry">Online Entry Options</label><br />
            <input type="checkbox" id="text-entry" />
            <label htmlFor="text-entry">Text Entry</label><br />

            <input type="checkbox" id="website-url" />
            <label htmlFor="website-url">Website URL</label><br />

            <input type="checkbox" id="media-recordings" />
            <label htmlFor="media-recordings">Media Recordings</label><br />

            <input type="checkbox" id="student-annotation" />
            <label htmlFor="student-annotation">Student Annotation</label><br />

            <input type="checkbox" id="file-uploads" />
            <label htmlFor="file-uploads">File Uploads</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          <label htmlFor="text-entry">Assign</label><br />
          </td>

          <tr>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-due-date">Due</label><br />
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>

          <tr>
            {/* Available From and Until on the same row */}
            <td>
              <label htmlFor="wd-available-from">Available from</label><br />
              <input id="wd-available-from" type="date" value="2024-05-06" />  
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label><br />
              <input id="wd-available-until" type="date" value="2024-05-20" />
 
            </td>
          </tr>
        </tr>

      </table>
      
      <hr />

      {/* Action Buttons */}
      <div  style={{ textAlign: 'right' }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>

    </div>
);}
