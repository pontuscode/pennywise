import express from "express";
import bodyParser from "body-parser";
import loadRoutes from "./loaders/routes.js";

const app = express();

app.use(bodyParser.json());
loadRoutes(app);

console.log("Hej")

export default app;
