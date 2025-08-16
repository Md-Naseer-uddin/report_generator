import React from "react";

const StudentForm = ({ student, setStudent }) => {
  return (
    <div>
      <h3>Enter Student Details</h3>
      <div className="flex  justify-between gap-4 w-full">
      <input
        type="text"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Roll No"
        value={student.rollNo}
        onChange={(e) => setStudent({ ...student, rollNo: e.target.value })}
      />
      {/* <input
        type="text"
        placeholder="Class/Section"
        value={student.classSec}
        onChange={(e) => setStudent({ ...student, classSec: e.target.value })}
      /> */}
      <input
        type="text"
        placeholder="Admin No"
        value={student.adminNo}
        onChange={(e) => setStudent({ ...student, adminNo: e.target.value })}
      />

      <input
        type="text"
        placeholder="Grade"
        value={student.grade}
        onChange={(e) => setStudent({ ...student, grade: e.target.value })}
      />

      <input
        type="text"
        placeholder="Section"
        value={student.section}
        onChange={(e) => setStudent({ ...student, section: e.target.value })}
      />

      <input
        type="text"
        placeholder="Father Name"
        value={student.fatherName}
        onChange={(e) => setStudent({ ...student, fatherName: e.target.value })}
      />
      </div>
    </div>
  );
};

export default StudentForm;
