import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes.js";
import clientdb from "./config/db.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

await clientdb.connect();

app.get("/", (req, res) => {
    res.send("Hello from server");
});

// Rotas
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

