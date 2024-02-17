import { Elysia } from "elysia";
import { env } from "./env";
import connectToDatabase from "./db/connection";
import { Controllers } from "./controllers";
import { cors } from "@elysiajs/cors";

function startServer() {
  const app = new Elysia();
  app.use(cors());
  app.use(Controllers());
  app.listen(env.PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${env.PORT}`);
  });
}

connectToDatabase
  .then(() => {
    console.log("Database connection successful");
    startServer();
  })
  .catch(console.dir);
