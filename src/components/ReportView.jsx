import React, { forwardRef } from "react";
import ReportChart from "./ReportChart";
import logo from "./images/logo.png"; // Assuming logo.png is in the same directory

const ReportView = forwardRef(
  (
    {
      student,
      subjects,
      getTotal,
      grandTotal,
      gpa,
      percentage,
      getGrade,
      getGradePoint,
    },
    ref
  ) => {
    // Helper: Remarks based on Grade Point
    const getRemark = (gradePoint) => {
      if (gradePoint >= 9) return "Excellent";
      if (gradePoint >= 7) return "Good";
      if (gradePoint >= 5) return "Average";
      if (gradePoint >= 4) return "Poor";
      return "Very Poor";
    };

    // Overall Remark function (based on GPA)
    const getOverallRemark = (gpa) => {
      if (gpa >= 9) return "Excellent";
      if (gpa >= 7) return "Good";
      if (gpa >= 5) return "Average";
      if (gpa >= 4) return "Poor";
      return "Very Poor";
    };

    return (
      <div ref={ref} style={{ marginTop: "20px" }}>
        {/* HEADER SECTION */}
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            // backgroundColor: "#f5b6d5", // pink shade like photo
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Dummy Logo */}
            <div style={{ width: "80px", height: "80px", marginRight: "15px" }}>
              <img
                src={logo}
                alt="School Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* School Info */}
            <div style={{ textAlign: "center", flex: 1 }}>
              <h1 style={{ margin: "0", fontSize: "20px", fontWeight: "bold" }}>
                BRIGHT THE SCHOOL
              </h1>
              <p style={{ margin: "2px 0", fontStyle: "italic" }}>
                (Recognised by the Govt. of Telangana)
              </p>
              <p style={{ margin: "2px 0", fontSize: "12px" }}>
                # AL - MASOOD COMPLEX , beside PISTA HOUSE BANDLAGUDA, Hyderabad - 500005.
                (TS)
              </p>
              <p style={{ margin: "2px 0", fontSize: "12px" }}>
                Cell: 8074048833
              </p>
            </div>
          </div>

          {/* Progress Report Title */}
          <h3
            style={{
              textAlign: "center",
              margin: "10px 0",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px 0",
            }}
          >
            PROGRESS REPORT
          </h3>

          {/* Student Info Table */}
          <table width="100%" style={{ fontSize: "14px" }}>
            <tbody>
              <tr>
                <td>
                  <b>Exam Name :</b> FORMATIVE ASSESSMENT - 1
                </td>
                <td>
                  <b>Academic Year :</b> 2024-2025
                </td>
              </tr>
              <tr>
                <td>
                  <b>Admin No :</b> {student.adminNo}
                </td>
                <td>
                  <b>Roll No :</b> {student.rollNo}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Grade :</b> {student.grade}
                </td>
                <td>
                  <b>Section :</b> {student.section}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <b>Student Name :</b> {student.name}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <b>Father Name :</b> {student.fatherName}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SUBJECTS TABLE */}
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Participation</th>
              <th>Written Work</th>
              <th>Project Work</th>
              <th>Slip Test</th>
              <th>Total (20)</th>
              <th>Grade</th>
              <th>Grade Point</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subj, idx) => {
              // Merge Physics (index 4) and Biology (index 5)
              if (idx === 4) {
                const mergedTotal =
                  getTotal(subjects[4]) + getTotal(subjects[5]);
                const mergedGP = getGradePoint(mergedTotal);
                return (
                  <tr key="merged-6">
                    <td>5</td>
                    <td>
                      {subjects[4].name} <br /> {subjects[5].name}
                    </td>
                    <td>
                      {subjects[4].P} <br /> {subjects[5].P}
                    </td>
                    <td>
                      {subjects[4].W} <br /> {subjects[5].W}
                    </td>
                    <td>
                      {subjects[4].PR} <br /> {subjects[5].PR}
                    </td>
                    <td>
                      {subjects[4].S} <br /> {subjects[5].S}
                    </td>
                    <td>{mergedTotal}</td>
                    <td>{getGrade(mergedTotal)}</td>
                    <td>{mergedGP}</td>
                    <td>{getRemark(mergedGP)}</td>
                  </tr>
                );
              }

              // Skip Biology row (already merged)
              if (idx === 6) return null;

              // Normal rows
              const total = getTotal(subj);
              const gp = getGradePoint(total);
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{subj.name}</td>
                  <td>{subj.P}</td>
                  <td>{subj.W}</td>
                  <td>{subj.PR}</td>
                  <td>{subj.S}</td>
                  <td>{total}</td>
                  <td>{getGrade(total)}</td>
                  <td>{gp}</td>
                  <td>{getRemark(gp)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* FOOTER */}
        <p>
          <b>Total:</b> {grandTotal} |<b>GPA:</b> {gpa.toFixed(2)} |
          <b>Percentage:</b> {percentage.toFixed(2)}% |<b>Overall Remark:</b>{" "}
          {getOverallRemark(gpa)}
        </p>

        {/* CHART SECTION */}
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ textAlign: "center" }}>
            Graph: Maximum Marks vs Secured Marks
          </h3>
          <ReportChart subjects={subjects} getTotal={getTotal} />
        </div>
        <br />
        <p className="flex justify-between mt-10">
          <span>Sign. of Class Teacher</span>
          <span>Sign. of H.M</span>
          <span>Sign. of Parent</span>
        </p>
      </div>
    );
  }
);

export default ReportView;
