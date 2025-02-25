"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ActivityFeed() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const activities = [
    {
      id: 1,
      type: "deployment",
      message: "New version deployed to production",
      details: "Version 2.3.1 was successfully deployed to the production environment.",
    },
    {
      id: 2,
      type: "alert",
      message: "High CPU usage detected",
      details: "Server XYZ-123 is experiencing unusually high CPU usage. Consider scaling up resources.",
    },
    {
      id: 3,
      type: "cost",
      message: "Monthly spend limit reached",
      details: "The monthly spend limit of $10,000 has been reached. Review your resource allocation.",
    },
    {
      id: 4,
      type: "security",
      message: "New security patch available",
      details: "A critical security patch is available for your database servers. Schedule maintenance ASAP.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
        <CardDescription>Recent system activities and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{activity.message}</h4>
                  {expandedItem === activity.id && <p className="text-sm text-gray-600 mt-2">{activity.details}</p>}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedItem(expandedItem === activity.id ? null : activity.id)}
                >
                  {expandedItem === activity.id ? "Less" : "More"}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

