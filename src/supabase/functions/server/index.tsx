import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-83cff061/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact Form Endpoint
app.post("/make-server-83cff061/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, type, message } = body;
    
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const id = crypto.randomUUID();
    const submission = {
      id,
      name,
      email,
      type,
      message,
      submittedAt: new Date().toISOString()
    };

    // Store in KV
    await kv.set(`contact:${id}`, submission);

    return c.json({ success: true, id });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);