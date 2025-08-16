// import React, { useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";

// const ReportCard = () => {
//   // Student details
//   const [student, setStudent] = useState({
//     name: "",
//     rollNo: "",
//     classSec: "",
//   });

//   // Subjects data
//   const [subjects, setSubjects] = useState([
//     { name: "Urdu/Hindi", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//     { name: "Telugu", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//     { name: "English", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//     { name: "Maths", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//     { name: "Physics", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//     { name: "Biology", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//     { name: "Social", P: 0, W: 0, PR: 0, S: 0, remark: "" },
//   ]);

//   // // Ref for printing
//   // const reportRef = useRef();

//   // // React-to-Print handler
//   // const handlePrint = useReactToPrint({
//   //   content: () => reportRef.current,
//   // });

//   const reportRef = useRef();

//   const handlePrint = useReactToPrint({
//     contentRef: reportRef, // ✅ latest react-to-print API
//     documentTitle: "FA4 Report Card",
//   });
//   // Calculate totals
//   const getTotal = (subj) => subj.P + subj.W + subj.PR + subj.S;
//   const grandTotal = subjects.reduce((sum, subj) => sum + getTotal(subj), 0);
//   const percentage = subjects.length ? (grandTotal / (subjects.length * 100)) * 100 : 0;
//   const gpa = percentage / 10;

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* -------- Form Section -------- */}
//       <h3>Enter Student Details</h3>
//       <div>
//         <input
//           type="text"
//           placeholder="Name"
//           value={student.name}
//           onChange={(e) => setStudent({ ...student, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Roll No"
//           value={student.rollNo}
//           onChange={(e) => setStudent({ ...student, rollNo: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Class/Section"
//           value={student.classSec}
//           onChange={(e) => setStudent({ ...student, classSec: e.target.value })}
//         />
//       </div>

//       <h4>Subjects & Marks</h4>
//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>P</th>
//             <th>W</th>
//             <th>PR</th>
//             <th>S</th>
//             <th>Remark</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subjects.map((subj, idx) => (
//             <tr key={idx}>
//               <td>{subj.name}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={subj.P}
//                   onChange={(e) => {
//                     const newSubs = [...subjects];
//                     newSubs[idx].P = Number(e.target.value);
//                     setSubjects(newSubs);
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={subj.W}
//                   onChange={(e) => {
//                     const newSubs = [...subjects];
//                     newSubs[idx].W = Number(e.target.value);
//                     setSubjects(newSubs);
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={subj.PR}
//                   onChange={(e) => {
//                     const newSubs = [...subjects];
//                     newSubs[idx].PR = Number(e.target.value);
//                     setSubjects(newSubs);
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={subj.S}
//                   onChange={(e) => {
//                     const newSubs = [...subjects];
//                     newSubs[idx].S = Number(e.target.value);
//                     setSubjects(newSubs);
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   value={subj.remark}
//                   onChange={(e) => {
//                     const newSubs = [...subjects];
//                     newSubs[idx].remark = e.target.value;
//                     setSubjects(newSubs);
//                   }}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handlePrint} style={{ marginTop: "10px" }}>
//         Print Report
//       </button>

//       {/* -------- Report Section (Print Only) -------- */}
//       <div ref={reportRef} style={{ marginTop: "40px" }}>
//         <h2 style={{ textAlign: "center" }}>
//           FURQAAN ISLAMIC GROUP OF SCHOOLS
//         </h2>
//         <p style={{ textAlign: "center" }}>
//           Recognised by the Govt. of Telangana
//         </p>
//         <h3 style={{ textAlign: "center" }}>PROGRESS REPORT</h3>
//         <p style={{ textAlign: "center" }}>
//           Formative Assessment - 4 | Academic Year: 2024-2025
//         </p>

//         <p>
//           <b>Name:</b> {student.name}
//         </p>
//         <p>
//           <b>Roll No:</b> {student.rollNo}
//         </p>
//         <p>
//           <b>Class/Section:</b> {student.classSec}
//         </p>

//         <table border="1" width="100%">
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Subject</th>
//               <th>P</th>
//               <th>W</th>
//               <th>PR</th>
//               <th>S</th>
//               <th>Total</th>
//               <th>Remarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subjects.map((subj, idx) => (
//               <tr key={idx}>
//                 <td>{idx + 1}</td>
//                 <td>{subj.name}</td>
//                 <td>{subj.P}</td>
//                 <td>{subj.W}</td>
//                 <td>{subj.PR}</td>
//                 <td>{subj.S}</td>
//                 <td>{getTotal(subj)}</td>
//                 <td>{subj.remark}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <p>
//           <b>Total:</b> {grandTotal} | <b>GPA:</b> {gpa.toFixed(2)} |{" "}
//           <b>Percentage:</b> {percentage.toFixed(2)}%
//         </p>

//         <p style={{ marginTop: "40px" }}>
//           Sign. of Class Teacher &nbsp;&nbsp;&nbsp;&nbsp; Sign. of H.M
//           &nbsp;&nbsp;&nbsp;&nbsp; Sign. of Parent
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;

import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import StudentForm from "./components/StudentForm";
import SubjectsForm from "./components/SubjectsForm";
import ReportView from "./components/ReportView";

const ReportCard = () => {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    classSec: "",
  });

  const [subjects, setSubjects] = useState([
    { name: "Urdu/Hindi", P: 0, W: 0, PR: 0, S: 0, remark: "" },
    { name: "Telugu", P: 0, W: 0, PR: 0, S: 0, remark: "" },
    { name: "English", P: 0, W: 0, PR: 0, S: 0, remark: "" },
    { name: "Maths", P: 0, W: 0, PR: 0, S: 0, remark: "" },
    { name: "Physics", P: 0, W: 0, PR: 0, S: 0, remark: "" },
    { name: "Biology", P: 0, W: 0, PR: 0, S: 0, remark: "" },
    { name: "Social", P: 0, W: 0, PR: 0, S: 0, remark: "" },
  ]);

  const getTotal = (subj) => subj.P + subj.W + subj.PR + subj.S;
  const grandTotal = subjects.reduce((sum, subj) => sum + getTotal(subj), 0);
  const percentage = subjects.length
    ? (grandTotal / ((subjects.length - 1) * 20)) * 100
    : 0;
  const gpa = percentage / 10;

  const getGrade = (marks) => {
    if (marks >= 18) return "A1";
    if (marks >= 16) return "A2";
    if (marks >= 14) return "B1";
    if (marks >= 12) return "B2";
    if (marks >= 10) return "C1";
    if (marks >= 8) return "C2";
    if (marks >= 6) return "D";
    return "E"; // fail
  };

  // Convert total marks → Grade Point
  const getGradePoint = (marks) => {
    if (marks >= 18) return 10;
    if (marks >= 16) return 9;
    if (marks >= 14) return 8;
    if (marks >= 12) return 7;
    if (marks >= 10) return 6;
    if (marks >= 8) return 5;
    if (marks >= 6) return 4;
    return 0; // fail
  };

  const reportRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: reportRef,
    documentTitle: "FA4 Report Card",
  });

  return (
    <div style={{ padding: "20px" }}>
      <StudentForm student={student} setStudent={setStudent} />
      <SubjectsForm subjects={subjects} setSubjects={setSubjects} />

      <button onClick={handlePrint} style={{ cursor: "pointer", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", fontSize: "16px" }}>
        Print Report
      </button>

      <ReportView
        ref={reportRef}
        student={student}
        subjects={subjects}
        getTotal={getTotal}
        grandTotal={grandTotal}
        gpa={gpa}
        percentage={percentage}
        getGrade={getGrade}
        getGradePoint={getGradePoint}
      />
    </div>
  );
};

export default ReportCard;
