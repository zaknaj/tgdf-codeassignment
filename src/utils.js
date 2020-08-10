const periods = {
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  quarter: 4 * 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
  all: 2000000000000,
};

export const filterByTime = (data, period) => {
  const now = new Date();

  return data.filter((el) => {
    const then = new Date(el.timestamp);
    return now - then < periods[period];
  });
};
