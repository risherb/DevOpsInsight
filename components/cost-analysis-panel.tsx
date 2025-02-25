"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

export function CostAnalysisPanel() {
  const [potentialSavings, setPotentialSavings] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPotentialSavings((prev) => {
        if (prev < 15000) {
          return prev + 500
        }
        clearInterval(timer)
        return 15000
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: "bar" as const,
        label: "Monthly Spend",
        data: [12000, 19000, 15000, 17000, 14000, 18000],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "line" as const,
        label: "Forecast",
        data: [13000, 18000, 16000, 18000, 15000, 19000],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Analysis</CardTitle>
        <CardDescription>Monthly spend and potential savings</CardDescription>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Potential Savings</h4>
          <p className="text-3xl font-bold text-green-600">${potentialSavings.toLocaleString()}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Cost Breakdown</h4>
          <ul className="list-disc list-inside">
            <li>Compute: 45%</li>
            <li>Storage: 30%</li>
            <li>Network: 15%</li>
            <li>Other: 10%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

