import express from "express";
import bodyParser from "body-parser";
import loadRoutes from "./loaders/routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "chrome-extension://*",
    optionsSuccessStatus: 200
}
app.use(bodyParser.json());
app.use(cors());
loadRoutes(app);

export default app;
