"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Bell,
  Search,
  User,
  Home,
  Activity,
  DollarSign,
  GitBranch,
  Settings,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SystemStatusMonitor } from "@/components/system-status-monitor"
import { CostAnalysisPanel } from "@/components/cost-analysis-panel"
import { DeploymentPipeline } from "@/components/deployment-pipeline"
import { ActivityFeed } from "@/components/activity-feed"
import { AboutFAQs } from "@/components/about-faqs"
import { MonitoringPage } from "@/components/monitoring-page"
import { CostManagementPage } from "@/components/cost-management-page"

export default function DevOpsInsights() {
  const [theme, setTheme] = useState("light")
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background text-foreground font-sans">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>DevOpsInsights</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[
                    { icon: Home, label: "Dashboard", value: "dashboard" },
                    { icon: Activity, label: "Monitoring", value: "monitoring" },
                    { icon: DollarSign, label: "Cost Management", value: "cost" },
                    { icon: GitBranch, label: "Deployment Pipeline", value: "deployment" },
                    { icon: Settings, label: "Settings", value: "settings" },
                    { icon: HelpCircle, label: "About", value: "about" },
                  ].map((item) => (
                    <SidebarMenuItem key={item.value}>
                      <SidebarMenuButton
                        onClick={() => setActiveTab(item.value)}
                        className={activeTab === item.value ? "bg-accent text-accent-foreground" : ""}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 flex items-center justify-between px-4 border-b">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="Search..." className="w-64" />
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            {activeTab === "dashboard" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <SystemStatusMonitor />
                <CostAnalysisPanel />
                <DeploymentPipeline />
                <ActivityFeed />
              </div>
            )}
            {activeTab === "monitoring" && <MonitoringPage />}
            {activeTab === "cost" && <CostManagementPage />}
            {activeTab === "deployment" && <DeploymentPipeline fullPage />}
            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage your account settings and preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="profile">
                    <TabsList>
                      <TabsTrigger value="profile">Profile</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                      <TabsTrigger value="security">Security</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                          </label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="preferences">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Enable notifications</span>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Dark mode</span>
                          <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="security">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium mb-1">
                            Current Password
                          </label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium mb-1">
                            New Password
                          </label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
                            Confirm New Password
                          </label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            {activeTab === "about" && <AboutFAQs />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

