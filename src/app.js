import express from "express";
import dataBaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
const connect = await dataBaseConnect();
connect.on("error", (err) => {
  console.error("connection error with database", err);
});

connect.once("open", () => {
  console.log("connected to database");
});

const app = express();
routes(app);
export default app;
