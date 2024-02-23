import { Elysia } from "elysia";
import { imovelController } from "./imovel";
import { EmailController } from "./email";

export const Controllers = (): Elysia => {
  const app = new Elysia();
  imovelController(app);
  EmailController(app);
  return app;
};
