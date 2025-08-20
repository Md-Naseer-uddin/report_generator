import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ReportChart = ({ subjects, getTotal }) => {
  // Prepare chart data
  const data = subjects
    .map((subj, idx) => {
      if (idx === 4) {
        // Merge Physics + Biology
        const mergedTotal = getTotal(subjects[4]) + getTotal(subjects[5]);
        return {
          name: "Phy-Bio",
          Secured: mergedTotal,
          Max: 20, // total max for 2 subjects
        };
      }
      if (idx === 5) return null; // Skip Biology row

      return {
        name: subj.name,
        Secured: getTotal(subj),
        Max: 20, // each subject max
      };
    })
    .filter(Boolean);

  return (
    <div style={{ marginTop: "30px", width: "100%", height: "350px" }}>
      {/* Responsive container needs a parent with width/height */}
      <ResponsiveContainer width="80%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Max" fill="#8884d8" name="Maximum Marks" />
          <Bar dataKey="Secured" fill="#82ca9d" name="Secured Marks" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportChart;
