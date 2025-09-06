import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleGetMonasteries } from "./routes/monasteries";
import { handleGetTours } from "./routes/tours";
import { handleGetArchives } from "./routes/archives";
import { handleGetEvents } from "./routes/events";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Monastery360 APIs
  app.get("/api/monasteries", handleGetMonasteries);
  app.get("/api/tours", handleGetTours);
  app.get("/api/archives", handleGetArchives);
  app.get("/api/events", handleGetEvents);

  return app;
}
