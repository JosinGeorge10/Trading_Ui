import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

export default function Graph() {
  Chart.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement);
  const data = {
    labels: ['5 May', '6 May', '7 May', '8 May', '9 May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 70, 70, 75, 68],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `USD: ${value}K`;
          },
          stepSize: 5,
          suggestedMin: 60,
          suggestedMax: 80,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value}K`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
