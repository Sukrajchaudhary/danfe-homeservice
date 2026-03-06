"use client";

import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
      Users,
      BarChart3,
      Calendar,
      TrendingUp,
      ArrowUpRight,
      ArrowDownRight,
      Activity,
      Bell,
      Settings,
      Plus,
      MoreHorizontal,
} from "lucide-react";

const statsCards = [
      {
            title: "Total Members",
            value: "2,847",
            change: "+12.5%",
            trend: "up",
            icon: Users,
            gradient: "from-blue-500 to-cyan-500",
      },
      {
            title: "Active Projects",
            value: "184",
            change: "+8.2%",
            trend: "up",
            icon: BarChart3,
            gradient: "from-violet-500 to-purple-500",
      },
      {
            title: "Events This Month",
            value: "32",
            change: "-3.1%",
            trend: "down",
            icon: Calendar,
            gradient: "from-emerald-500 to-teal-500",
      },
      {
            title: "Revenue",
            value: "$48.2K",
            change: "+22.4%",
            trend: "up",
            icon: TrendingUp,
            gradient: "from-amber-500 to-orange-500",
      },
];

const recentActivity = [
      {
            user: "Sarah Johnson",
            action: "joined the organization",
            time: "2 minutes ago",
            avatar: "S",
      },
      {
            user: "Michael Chen",
            action: "created a new project",
            time: "15 minutes ago",
            avatar: "M",
      },
      {
            user: "Emily Rodriguez",
            action: "completed task #142",
            time: "1 hour ago",
            avatar: "E",
      },
      {
            user: "James Wilson",
            action: "uploaded 3 documents",
            time: "2 hours ago",
            avatar: "J",
      },
      {
            user: "Lisa Park",
            action: "updated the team roster",
            time: "3 hours ago",
            avatar: "L",
      },
];

const upcomingEvents = [
      {
            title: "Team Standup",
            time: "10:00 AM",
            date: "Today",
            color: "bg-blue-500",
      },
      {
            title: "Design Review",
            time: "2:00 PM",
            date: "Today",
            color: "bg-violet-500",
      },
      {
            title: "Sprint Planning",
            time: "9:00 AM",
            date: "Tomorrow",
            color: "bg-emerald-500",
      },
      {
            title: "All Hands Meeting",
            time: "3:00 PM",
            date: "Feb 20",
            color: "bg-amber-500",
      },
];

const containerVariants = {
      hidden: { opacity: 0 },
      show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
      },
};

const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
      const { data: session } = useSession();

      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Navbar />

                  <main className="flex-1">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                              {/* Welcome Section */}
                              <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
                              >
                                    <div>
                                          <h1 className="text-2xl sm:text-3xl font-bold">
                                                Welcome back,{" "}
                                                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                                      {session?.user?.name || "User"}
                                                </span>
                                                ! 👋
                                          </h1>
                                          <p className="text-muted-foreground mt-1">
                                                Here&apos;s what&apos;s happening with your organization today.
                                          </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <Button variant="outline" size="sm">
                                                <Bell className="h-4 w-4 mr-2" />
                                                Notifications
                                          </Button>
                                          <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
                                          >
                                                <Plus className="h-4 w-4 mr-2" />
                                                New Project
                                          </Button>
                                    </div>
                              </motion.div>

                              {/* Stats Grid */}
                              <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                              >
                                    {statsCards.map((stat) => (
                                          <motion.div key={stat.title} variants={itemVariants}>
                                                <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
                                                      <CardContent className="p-6">
                                                            <div className="flex items-center justify-between mb-4">
                                                                  <div
                                                                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                                                                  >
                                                                        <stat.icon className="h-5 w-5 text-white" />
                                                                  </div>
                                                                  <Badge
                                                                        variant="secondary"
                                                                        className={`text-xs font-medium ${stat.trend === "up"
                                                                              ? "text-emerald-500 bg-emerald-500/10"
                                                                              : "text-red-500 bg-red-500/10"
                                                                              }`}
                                                                  >
                                                                        {stat.trend === "up" ? (
                                                                              <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                                                        ) : (
                                                                              <ArrowDownRight className="h-3 w-3 mr-0.5" />
                                                                        )}
                                                                        {stat.change}
                                                                  </Badge>
                                                            </div>
                                                            <div className="text-2xl font-bold">{stat.value}</div>
                                                            <p className="text-xs text-muted-foreground mt-1">
                                                                  {stat.title}
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </motion.div>
                                    ))}
                              </motion.div>

                              {/* Main Content Grid */}
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Recent Activity */}
                                    <motion.div
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: 0.3 }}
                                          className="lg:col-span-2"
                                    >
                                          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                                            <Activity className="h-5 w-5 text-violet-500" />
                                                            Recent Activity
                                                      </CardTitle>
                                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                      </Button>
                                                </CardHeader>
                                                <CardContent>
                                                      <div className="space-y-4">
                                                            {recentActivity.map((activity, index) => (
                                                                  <motion.div
                                                                        key={index}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 0.4 + index * 0.1 }}
                                                                        className="flex items-center gap-3"
                                                                  >
                                                                        <Avatar className="h-9 w-9">
                                                                              <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xs font-bold">
                                                                                    {activity.avatar}
                                                                              </AvatarFallback>
                                                                        </Avatar>
                                                                        <div className="flex-1 min-w-0">
                                                                              <p className="text-sm">
                                                                                    <span className="font-medium">
                                                                                          {activity.user}
                                                                                    </span>{" "}
                                                                                    <span className="text-muted-foreground">
                                                                                          {activity.action}
                                                                                    </span>
                                                                              </p>
                                                                              <p className="text-xs text-muted-foreground">
                                                                                    {activity.time}
                                                                              </p>
                                                                        </div>
                                                                  </motion.div>
                                                            ))}
                                                      </div>
                                                </CardContent>
                                          </Card>
                                    </motion.div>

                                    {/* Upcoming Events */}
                                    <motion.div
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                                            <Calendar className="h-5 w-5 text-violet-500" />
                                                            Upcoming Events
                                                      </CardTitle>
                                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                                            <Plus className="h-4 w-4" />
                                                      </Button>
                                                </CardHeader>
                                                <CardContent>
                                                      <div className="space-y-3">
                                                            {upcomingEvents.map((event, index) => (
                                                                  <motion.div
                                                                        key={index}
                                                                        initial={{ opacity: 0, x: 10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 0.5 + index * 0.1 }}
                                                                        className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer"
                                                                  >
                                                                        <div
                                                                              className={`w-1 h-10 rounded-full ${event.color}`}
                                                                        />
                                                                        <div className="flex-1">
                                                                              <p className="text-sm font-medium">{event.title}</p>
                                                                              <p className="text-xs text-muted-foreground">
                                                                                    {event.date} · {event.time}
                                                                              </p>
                                                                        </div>
                                                                  </motion.div>
                                                            ))}
                                                      </div>
                                                </CardContent>
                                          </Card>
                                    </motion.div>
                              </div>
                        </div>
                  </main>

                  <Footer />
            </div>
      );
}
