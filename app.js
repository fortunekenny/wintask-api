require("dotenv").config();
require("express-async-errors");

//Express
const express = require("express");
const app = express();

//rest of packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// const crossEnv = require("cross-env");

//Database
const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");
// process.env.TZ = "Africa/Lagos";

//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
// app.use(crossEnv());

app.get("/", (req, res) => {
  res.send("WINTASK-API");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`WINTASK-API server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
