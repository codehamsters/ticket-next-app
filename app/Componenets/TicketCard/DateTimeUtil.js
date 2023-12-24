const dateTimeUtil = (timeStr) => {
  let createdAt = timeStr;

  let dateObj = new Date(createdAt);

  let date =
    ("0" + dateObj.getDate()).slice(-2) +
    "/" +
    ("0" + (dateObj.getMonth() + 1)).slice(-2) +
    "/" +
    dateObj.getFullYear().toString().substr(-2);

  let time =
    ("0" + dateObj.getHours()).slice(-2) +
    ":" +
    ("0" + dateObj.getMinutes()).slice(-2) +
    ":" +
    ("0" + dateObj.getSeconds()).slice(-2);

  createdAt = date + " " + time;
  return createdAt;
};

export default dateTimeUtil;
