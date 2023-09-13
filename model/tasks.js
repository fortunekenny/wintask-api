const mongoose = require("mongoose");

// process.env.TZ = "Africa/Lagos";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter your task title"],
    },
    alarmHour: {
      type: Number,
      required: [true, "Please enter the alarm hour(s)"],
      min: 0,
      max: 23,
    },
    alarmMinute: {
      type: Number,
      required: [true, "Please enter the alarm minute(s)"],
      min: 0,
      max: 59,
    },
    remainingTime: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
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
      enum: ["hourly", "daily", "none", "once"],
      default: "none",
    },
  },
  { timestamps: true }
);

// TaskSchema.pre("save", async function () {
//   this.alarmHour = await this.alarmHour.getHours();
// });

// TaskSchema.pre("save", async function () {
//   this.alarmHour = await this.alarmMinute.getMinutes();
// });

module.exports = mongoose.model("Task", TaskSchema);
