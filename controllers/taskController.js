// const User = require("../model/user");
const Task = require("../model/tasks");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
// process.env.TZ = "Africa/Lagos";

const createTask = async (req, res) => {
  req.body.user = req.user.userId;
  console.log(req.body);
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
