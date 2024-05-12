import mongoose from "mongoose";
import "dotenv/config";

const password = process.env.MONGO_PASSWORD;

async function dataBaseConnect() {
  mongoose.connect(
    `mongodb+srv://admin:${password}  @moviecluster.hejsw33.mongodb.net/?retryWrites=true&w=majority&appName=movieCluster`
  );
  return mongoose.connection;
}

export default dataBaseConnect;
