const transformByEnterValue = (currentRobots, enterValue) => {
  if (!currentRobots) return currentRobots;
  return currentRobots.filter((item) =>
    item.name.toLowerCase().includes(enterValue.toLowerCase())
  );
};

export default transformByEnterValue;
