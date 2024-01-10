interface SeedDataProps {
  startDate: number;
  startPoints: number;
  numberOfDays: number;
}

export function mockBurndownData({
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

export function mockBurnupData({
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
