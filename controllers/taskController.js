// const User = require("../model/user");
const Task = require("../model/tasks");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
// process.env.TZ = "Africa/Lagos";
// const timeNow = new Date().toLocaleString("en-US", {
//   timeZone: "Africa/Lagos",
// });

// console.log(new Date().getFullYear());

const currentTime = new Date().getTime();
console.log(currentTime);

const timeNow = new Date();
console.log(timeNow);
// const year = timeNow.getFullYear();
// const month = timeNow.getMonth();
// const day = timeNow.getDay();
// const hours = timeNow.getHours();
// const minutes = timeNow.getMinutes();
// const seconds = timeNow.getSeconds();

const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const addedHour = oneHour * 3;
const addedMinute = oneMinute * 30;

const futureTime = new Date().getTime() + addedHour + addedMinute;
console.log(futureTime);

const remainingTime = futureTime - currentTime;
console.log(remainingTime);

const remainingHours = Math.floor(remainingTime / oneHour);
console.log(remainingHours);

const remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
console.log(remainingMinutes);

// console.log(year);

const createTask = async (req, res) => {
  req.body.user = req.user.userId;
  const { title, alarmHour, alarmMinute } = req.body;

  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const addedHour = oneHour * 3;
  const addedMinute = oneMinute * 30;

  const futureTime = new Date().getTime() + addedHour + addedMinute;
  console.log(futureTime);

  const remainingTime = futureTime - currentTime;
  console.log(remainingTime);

  const remainingHours = Math.floor(remainingTime / oneHour);
  console.log(remainingHours);

  const remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
  console.log(remainingMinutes);

  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
};

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const getTask = (req, res) => {
  res.send("get task");
};

const updateTask = (req, res) => {
  res.send("task updated");
};

const deleteTask = (req, res) => {
  res.send("task deleted");
};

// const getAllTasks = (req, res) => {
//   res.send("all tasks");
// };

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
