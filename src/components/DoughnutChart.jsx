// src/components/PieChart.js
import React from "react";


import { Doughnut, } from 'react-chartjs-2';


function DoughnutChart({ chartData }) {
  return (
    <div className="chart-container  w-full h-full rounded-full ">
      {/* <h2 style={{ textAlign: "center" }}>Pie Chart</h2> */}
      <Doughnut
        data={chartData}

        
        options={{
            responsive:true,
            plugins:{
                title:{
                    display:false
                },
                legend: {
display:false,
                  },
            
            }
        
        }}
        

        
      />
    </div>
  );
}
export default DoughnutChart;
