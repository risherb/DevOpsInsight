import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line } from "react-chartjs-2"
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

export function MonitoringPage() {
  const cpuUsageData = {
    labels: ["1h", "2h", "3h", "4h", "5h", "6h"],
    datasets: [
      {
        label: "CPU Usage",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const memoryUsageData = {
    labels: ["1h", "2h", "3h", "4h", "5h", "6h"],
    datasets: [
      {
        label: "Memory Usage",
        data: [4, 3, 5, 2, 3, 4],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "System Metrics",
      },
    },
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>CPU Usage</CardTitle>
          <CardDescription>Last 6 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <Line data={cpuUsageData} options={options} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Memory Usage</CardTitle>
          <CardDescription>Last 6 hours (in GB)</CardDescription>
        </CardHeader>
        <CardContent>
          <Bar data={memoryUsageData} options={options} />
        </CardContent>
      </Card>
    </div>
  )
}

