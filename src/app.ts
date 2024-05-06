import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { routersSrc } from "./constants/pathSrc";
import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware";
import { formatResponseMiddleware } from "./middleware/formatResponseMiddleware";

const app = express();

// Logger
app.use(morgan("combined"));

// JSON Middleware
app.use(express.json());

// Response Formatter
app.use(formatResponseMiddleware);

// API Routers
app.use(routersSrc.notes.path, routersSrc.notes.router);

// 404 Handler
app.use(notFoundMiddleware);

// Error Handler
app.use(errorHandlerMiddleware);

export default app;
