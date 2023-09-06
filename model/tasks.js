const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter your task title"],
    },
    alarmHour: {
      type: Date,
      required: [true, "Please enter the hour time"],
      min: 0,
      max: 23,
    },
    alarmMinute: {
      type: Date,
      required: [true, "Please enter the minute time"],
      min: 0,
      max: 59,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "cancelled"],
      default: "inactive",
    },
    repeat: {
      type: String,
      enum: ["hourly", "daily", "none"],
      default: "none",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
