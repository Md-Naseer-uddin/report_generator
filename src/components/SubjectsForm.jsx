import React from "react";

const SubjectsForm = ({ subjects, setSubjects }) => {
  return (
    <div>
      <h4>Subjects & Marks</h4>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Participation</th>
            <th>Written Work</th>
            <th>Project Work</th>
            <th>Slip Test</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subj, idx) => (
            <tr key={idx}>
              <td>{subj.name}</td>
              <td>
                <input
                  type="number"
                  value={subj.P}
                  onChange={(e) => {
                    const newSubs = [...subjects];
                    newSubs[idx].P = Number(e.target.value);
                    setSubjects(newSubs);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={subj.W}
                  onChange={(e) => {
                    const newSubs = [...subjects];
                    newSubs[idx].W = Number(e.target.value);
                    setSubjects(newSubs);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={subj.PR}
                  onChange={(e) => {
                    const newSubs = [...subjects];
                    newSubs[idx].PR = Number(e.target.value);
                    setSubjects(newSubs);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={subj.S}
                  onChange={(e) => {
                    const newSubs = [...subjects];
                    newSubs[idx].S = Number(e.target.value);
                    setSubjects(newSubs);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectsForm;
