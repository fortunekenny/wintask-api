const mongoose = require("mongoose");

// process.env.TZ = "Africa/Lagos";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter your task title"],
    },
    alarmHour: {
      type: Date,
      required: [true, "Please enter the alarm hour(s)"],
      default: Date.now(),
      //   min: 0,
      //   max: 23,
    },
    alarmMinute: {
      type: Date,
      required: [true, "Please enter the alarm minute(s)"],
      default: Date.now(),
      //   min: 0,
      //   max: 59,
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

// TaskSchema.pre("save", async function () {
//   this.alarmHour = await this.alarmHour.getHours();
// });

module.exports = mongoose.model("Task", TaskSchema);
