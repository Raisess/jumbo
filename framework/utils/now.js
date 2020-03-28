module.exports = () => {
  const date = new Date();

  return {
    day: date.getDate(),
    month: date.getMonth()+1,
    year: date.getFullYear(),
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };
};