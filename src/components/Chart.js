import React from "react";
import { Line } from "react-chartjs-2";
import Title from "./Title";

export default function Chart() {
  const lineChart = (
    <Line
      data={{
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
          {
            data: [39000, 40900, 58000, 50500, 55700, 54000],
            label: "Monhtly contributions",
            borderColor: "#3333ff",

            fill: true,
          },
          {
            data: [900, 1090, 2800, 2050, 2570, 2400],
            label: "Monhtly Intersts",
            borderColor: "seagreen",
            backgroundColor: "rgba(25,0,0,0.8)",
            fill: true,
          },
          {
            data: [9000, 10900, 28000, 20500, 25700, 24000],
            label: "Monthly Loan Advances",
            borderColor: "purple",
            backgroundColor: "rgba(25,0,0,0.8)",
            fill: true,
          },
        ],
      }}
    />
  );
  return (
    <div>
      <Title title="Visualize Our Progress" />
      <div>{lineChart}</div>
    </div>
  );
}
