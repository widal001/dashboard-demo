import type { StatisticProps } from "@/components/dashboard/dashboard-stats";

export function mockSprintStats(
  daysLeft: number,
  startPoints: number
): StatisticProps[] {
  const openedCount = startPoints;
  const closedCount = openedCount - Math.floor(Math.random() * 10);
  return [
    {
      title: "Total opened",
      value: `${openedCount} points`,
      delta: "2 new points added yesterday",
    },
    {
      title: "Total closed",
      value: `${closedCount} points`,
      delta: "10 points closed yesterday",
    },
    {
      title: "Percent completed",
      value: `${Math.floor((closedCount / openedCount) * 100)}%`,
      delta: "+5% points from yesterday",
    },
    {
      title: "Time left in sprint",
      value: `${daysLeft} days`,
      delta: `Sprint is ${Math.floor((daysLeft / 14) * 100)}% complete`,
    },
  ];
}

function createStoryPointArr(props: {
  numberOfDays: number;
  addPoints: boolean;
  startingPoints: number;
  variance: number;
}) {
  const pointsOpen = [props.startingPoints];
  for (let index = 0; index < props.numberOfDays; index++) {
    let currPoints = pointsOpen[index];
    const delta = Math.floor(Math.random() * props.variance);
    const newPoints = props.addPoints
      ? (currPoints += delta)
      : (currPoints -= delta);
    pointsOpen.push(Math.max(0, newPoints));
  }
  return pointsOpen;
}

interface SeedDataProps {
  startDate: number;
  startPoints: number;
  numberOfDays: number;
}

function mockBurndownData({
  startDate,
  startPoints,
  numberOfDays,
}: SeedDataProps): Object[] {
  // Generate an array of 14 days from sprint start date
  const sprintLength = numberOfDays;
  const dateRange = Array.from(
    { length: sprintLength },
    (_, index) => startDate + index
  );
  // Generate an array of story point values
  const pointsArr = createStoryPointArr({
    numberOfDays: sprintLength,
    addPoints: false,
    startingPoints: startPoints,
    variance: 15,
  });
  // Zip the date range and story point totals
  const mockData = [];
  for (let index = 0; index < sprintLength; index++) {
    const date = dateRange[index];
    const points = pointsArr[index];
    mockData.push({
      day: `Jan ${date}`,
      total_open: points,
    });
  }
  // Return the mock data
  return mockData;
}

function mockBurnupData({
  startDate,
  startPoints,
  numberOfDays,
}: SeedDataProps) {
  // Generate an array of 14 days from sprint start date
  const sprintLength = numberOfDays;
  const dateRange = Array.from(
    { length: sprintLength },
    (_, index) => startDate + index
  );
  // Generate arrays of opened and closed story point values
  const openedPointsArr = createStoryPointArr({
    numberOfDays: sprintLength,
    addPoints: true,
    startingPoints: startPoints,
    variance: 5,
  });
  const closedPointsArr = createStoryPointArr({
    numberOfDays: sprintLength,
    addPoints: true,
    startingPoints: 0,
    variance: 20,
  });
  // Zip the date range and story point totals
  const mockData = [];
  for (let index = 0; index < sprintLength; index++) {
    const date = dateRange[index];
    const pointsOpened = openedPointsArr[index];
    const pointsClosed = closedPointsArr[index];
    mockData.push({
      day: `Jan ${date}`,
      total_opened: pointsOpened,
      total_closed: pointsClosed,
    });
  }
  // Return the mock data
  return mockData;
}

export function fetchSprintMetrics(daysLeft: number) {
  const sprintLength = 14;
  const startingPoints = Math.floor(Math.random() * 10 + 100);
  const burndownPoints = mockBurndownData({
    startDate: 1,
    startPoints: startingPoints,
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
      startPoints: startingPoints,
      numberOfDays: sprintLength,
    }),
    labelKey: "day",
    traces: [
      {
        dataKey: "total_opened",
        strokeColor: "#82ca9d",
        fillColor: "#82ca9d",
      },
      {
        dataKey: "total_closed",
        strokeColor: "#8884d8",
        fillColor: "#8884d8",
      },
    ],
  };
  const burnupProps = {
    kind: "area-chart",
    title: "Sprint burnup",
    data: burnupData,
  };
  return {
    stats: mockSprintStats(daysLeft, startingPoints),
    charts: [burndownProps, burnupProps],
  };
}
