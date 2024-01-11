import type { StatisticProps } from "@/components/dashboard/dashboard-stats";
import { mockBurndownData, mockBurnupData } from "@/lib/data";

export function fetchSprintMetrics(daysLeft: number) {
  const sprintLength = 14;
  const openedPoints = Math.floor(Math.random() * 10 + 100);
  const closedPoints = openedPoints - Math.floor(Math.random() * 10);
  const burndownPoints = mockBurndownData({
    startDate: 1,
    startPoints: openedPoints,
    endPoints: closedPoints,
    numberOfDays: sprintLength,
  });
  // Get data for sprint burndown
  const burndownData = {
    data: burndownPoints,
    labelKey: "day",
    traces: [
      {
        dataKey: "total_open",
        strokeColor: "#06508f",
        fillColor: "#2177b7",
      },
    ],
  };
  const burndownProps = {
    kind: "area-chart",
    title: "Sprint burndown",
    data: burndownData,
  };
  // Get data for sprint burnup
  const burnupData = {
    data: mockBurnupData({
      startDate: 1,
      startPoints: openedPoints,
      endPoints: closedPoints,
      numberOfDays: sprintLength,
    }),
    labelKey: "day",
    traces: [
      {
        dataKey: "closed",
        strokeColor: "#8884d8",
        fillColor: "#8884d8",
      },
      {
        dataKey: "open",
        strokeColor: "#82ca9d",
        fillColor: "#82ca9d",
      },
    ],
  };
  const burnupProps = {
    kind: "area-chart",
    title: "Sprint burnup",
    data: burnupData,
  };
  return {
    stats: mockSprintStats(daysLeft, openedPoints, closedPoints),
    charts: [burndownProps, burnupProps],
  };
}

function mockSprintStats(
  daysLeft: number,
  openedCount: number,
  closedCount: number
): StatisticProps[] {
  return [
    {
      title: "Total opened",
      value: `${openedCount} points`,
      delta: `${Math.floor(Math.random() * 5 + 2)} new points added yesterday`,
    },
    {
      title: "Total closed",
      value: `${closedCount} points`,
      delta: `${Math.floor(Math.random() * 5 + 10)} points closed yesterday`,
    },
    {
      title: "Percent completed",
      value: `${Math.floor((closedCount / openedCount) * 100)}%`,
      delta: "+5% points from yesterday",
    },
    {
      title: "Time left in sprint",
      value: `${daysLeft} days`,
      delta: `Sprint is ${Math.floor(((14 - daysLeft) / 14) * 100)}% complete`,
    },
  ];
}
