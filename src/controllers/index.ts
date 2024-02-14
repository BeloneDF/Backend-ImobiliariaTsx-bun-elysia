import { Elysia } from "elysia";
import { imovelController } from "./imovel";

export const Controllers = (): Elysia => {
  const app = new Elysia();
  imovelController(app);
  return app;
};
