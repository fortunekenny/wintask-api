const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authenctication");

const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router
  .route("/")
  .post([authenticateUser, authorizePermissions("founder")], createTask)
  .get([authenticateUser, authorizePermissions("founder")], getAllTasks);

router
  .route("/:id")
  .get(authenticateUser, authorizePermissions("founder"), getTask)
  .patch(authenticateUser, authorizePermissions("founder"), updateTask)
  .delete(authenticateUser, authorizePermissions("founder"), deleteTask);

module.exports = router;
