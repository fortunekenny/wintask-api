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
  .post(authenticateUser, authorizePermissions("user", "founder"), createTask)
  .get(
    [authenticateUser, authorizePermissions("user", "founder")],
    getAllTasks
  );

router
  .route("/:id")
  .get(authenticateUser, authorizePermissions("user", "founder"), getTask)
  .patch(authenticateUser, authorizePermissions("user", "founder"), updateTask)
  .delete(
    authenticateUser,
    authorizePermissions("user", "founder"),
    deleteTask
  );

module.exports = router;
