require("dotenv").config();
require("express-async-errors");

//Express
const express = require("express");
const app = express();

//rest of packages
const morgan = require("morgan");

//Database
const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes");

//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WINTASK-API");
});

app.use("/api/v1/auth", authRouter);

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
