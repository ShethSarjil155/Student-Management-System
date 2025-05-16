import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "./graph.css";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Graph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Attendance (%)",
        data: [85, 90, 80, 95, 75, 88],
        backgroundColor: "#007bff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="graph-container-userdashboard">
      <h3>Attendance Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
