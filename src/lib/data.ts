import type { StatisticProps } from "@/components/dashboard/dashboard-stats";

export function mockSprintStats(): StatisticProps[] {
  return [
    {
      title: "Total opened",
      value: "80 points",
      delta: "2 new points added yesterday",
    },
    {
      title: "Total closed",
      value: "60 points",
      delta: "10 points closed yesterday",
    },
    {
      title: "Percent completed",
      value: "75%",
      delta: "+5% points from yesterday",
    },
    {
      title: "Time left in sprint",
      value: "3 days",
      delta: "Sprint is 85% complete",
    },
  ];
}

export function mockBarChartData(): Object[] {
  return [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];
}
