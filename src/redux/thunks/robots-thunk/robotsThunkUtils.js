const transformGettingData = (onData) => (
  onData.map((item) => ({
    ...item,
    imageUrl: `https://robohash.org/${item.id}`,
  }))
);

export default transformGettingData;
