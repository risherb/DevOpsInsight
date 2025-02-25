import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DeploymentPipeline({ fullPage = false }) {
  const stages = [
    { name: "Code", status: "completed" },
    { name: "Build", status: "completed" },
    { name: "Test", status: "in-progress" },
    { name: "Deploy", status: "pending" },
  ]

  const deployments = [
    { id: "DEP-001", version: "v1.2.3", status: "success", date: "2023-06-15" },
    { id: "DEP-002", version: "v1.2.4", status: "failed", date: "2023-06-16" },
    { id: "DEP-003", version: "v1.2.5", status: "in-progress", date: "2023-06-17" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
      case "success":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "failed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className={fullPage ? "h-full" : ""}>
      <CardHeader>
        <CardTitle>Deployment Pipeline</CardTitle>
        <CardDescription>Current status of deployment stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-8">
          {stages.map((stage, index) => (
            <div key={stage.name} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(stage.status)} text-white`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-sm">{stage.name}</span>
              {index < stages.length - 1 && <div className="w-16 h-0.5 bg-gray-300 mt-6" />}
            </div>
          ))}
        </div>
        {fullPage && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Deployments</h3>
            <div className="space-y-4">
              {deployments.map((deployment) => (
                <div key={deployment.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="font-medium">{deployment.version}</p>
                    <p className="text-sm text-muted-foreground">{deployment.date}</p>
                  </div>
                  <Badge className={getStatusColor(deployment.status)}>{deployment.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

