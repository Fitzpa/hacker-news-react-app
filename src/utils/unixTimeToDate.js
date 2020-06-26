const unixTimeToDate = (unixTime) => {
  const milliseconds = unixTime * 1000;
  const dateObj = new Date(milliseconds);
  return dateObj.toLocaleString('en-US', {
    month: 'long', // "June"
    day: '2-digit', // "01"
    year: 'numeric', // "2019"
  });
};

export default unixTimeToDate;
