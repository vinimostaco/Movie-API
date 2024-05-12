import express from "express";
import dataBaseConnect from "./config/dbConnect.js";

const connect = await dataBaseConnect();
connect.on("error", (err) => {
  console.error("connection error with database", err);
});

connect.once("open", () => {
  console.log("connected to database");
});

const app = express();

export default app;
