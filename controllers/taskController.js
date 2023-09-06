const createTask = (req, res) => {
  res.send("task created");
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
