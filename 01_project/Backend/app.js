import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db_connection } from "./database/db_connection.js";
import { error_middleware } from "./error/error.js";
import reservation_router from "./routes/reservation_route.js";

dotenv.config({ path: "./config/config.env" }); 

const app = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db_connection();

app.use(error_middleware);

app.use("/api/v1/reservation", reservation_router);

app.get("/", (_req, res, _next) => {
    return res.status(200).json({
        success: true,
        message: "HELLO WORLD AGAIN"
    })
})

export default app;