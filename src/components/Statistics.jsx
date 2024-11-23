import React from 'react';
import '../styles/Statistics.css';
import { Line, Bar, Pie } from 'react-chartjs-2';

const Statistics = () => {
    const sampleData = {
        labels: ['Sensor 1', 'Sensor 2', 'Sensor 3', 'Sensor 4', 'Sensor 5'],
        datasets: [
            {
                label: 'Temperatures',
                data: [22, 24, 21, 23, 25],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="statistics-container">
            <h2>Estadísticas de Sensores</h2>
            <div className="chart-container">
                <Line data={sampleData} />
            </div>
            <div className="chart-container">
                <Bar data={sampleData} />
            </div>
            <div className="chart-container">
                <Pie data={sampleData} />
            </div>
        </div>
    );
};

export default Statistics;
