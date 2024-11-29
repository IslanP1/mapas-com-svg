import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes.js";
import clientdb from "./config/db.js";

const app = express();
dotenv.config();
await clientdb.connect();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});