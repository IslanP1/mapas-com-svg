import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes.js";
import clientdb from "./config/db.js";

const app = express();

// Configuração do CORS
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());

await clientdb.connect();

// Rotas
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

