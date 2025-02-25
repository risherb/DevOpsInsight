"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SystemStatusMonitor() {
  const [systemHealth, setSystemHealth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSystemHealth(87)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { name: "CPU", value: 65, color: "bg-green-500" },
    { name: "Memory", value: 80, color: "bg-yellow-500" },
    { name: "Network", value: 45, color: "bg-blue-500" },
    { name: "Storage", value: 70, color: "bg-purple-500" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Status Monitor</CardTitle>
        <CardDescription>Real-time system health and metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center mb-6">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-blue-600 progress-ring__circle stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - systemHealth / 100)}`}
                style={{ transition: "stroke-dashoffset 0.5s ease 0s" }}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{systemHealth}%</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex justify-between">
                <span>{metric.name}</span>
                <span>{metric.value}%</span>
              </div>
              <Progress value={metric.value} className={metric.color} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

