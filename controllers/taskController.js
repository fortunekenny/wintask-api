const Task = require("../model/tasks");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

// let bee;
// const rename = () => {
//   bee = "ken";
// };
// rename();
// console.log(bee);

const createTask = async (req, res) => {
  let { title, alarmHour, alarmMinute } = req.body;

  const currentTime = new Date();

  alarmHour = alarmHour < 10 ? `0${alarmHour}` : alarmHour;
  alarmMinute = alarmMinute < 10 ? `0${alarmMinute}` : alarmMinute;

  const timeNow = new Date();
  const year = timeNow.getFullYear();
  const month = timeNow.getMonth() + 1;
  const day = timeNow.getDate();
  const seconds = timeNow.getSeconds();
  const futureTime = new Date(
    `${year}/${month}/${day}-${alarmHour}:${alarmMinute}:${seconds}:10`
  );

  if (futureTime < currentTime) {
    throw new CustomError.BadRequestError(
      "Alarm time is bellow current time, please reset time"
    );
  }

  let remainingTime;
  let remainingHours;
  let remainingMinutes;
  let remainingSeconds;

  const timeRemaining = () => {
    const timesNow = new Date();
    remainingTime = futureTime.getTime() - timesNow.getTime();
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    remainingHours = Math.floor(remainingTime / oneHour);
    remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
    remainingSeconds = Math.floor((remainingTime % oneMinute) / 1000);

    if (remainingTime < 1000) {
      clearInterval(countDown);
    }

    return;
  };

  let countDown = setInterval(timeRemaining, 1000);

  timeRemaining();

  const task = await Task.create({
    title,
    alarmHour,
    alarmMinute,
    remainingTime,
    user: req.user.userId,
    remainingTime,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  });
  res.status(StatusCodes.CREATED).json({ task });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(StatusCodes.OK).json({ tasks, count: tasks.length });
};

const getUserTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ tasks });
};

const getTask = async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    throw new CustomError.NotFoundError(`No task with id: ${taskId}`);
  }

  checkPermissions(req.user, task.user);

  res.status(StatusCodes.OK).json({ task });
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    throw new CustomError.NotFoundError(`No task with id: ${taskId}`);
  }

  checkPermissions(req.user, task.user);

  res.status(StatusCodes.OK).json({ task });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    throw new CustomError.NotFoundError(`No task with id: ${taskId}`);
  }

  checkPermissions(req.user, task.user);

  await task.deleteOne();

  res.status(StatusCodes.OK).json({ msg: "Success! Task deleted" });
};

module.exports = {
  createTask,
  getAllTasks,
  getUserTasks,
  getTask,
  updateTask,
  deleteTask,
};
