import pg from "pg";
const { Client } = pg;

import dotenv from "dotenv";
dotenv.config();

const clientdb = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
});

export default clientdb;