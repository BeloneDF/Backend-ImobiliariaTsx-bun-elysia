import { Elysia } from "elysia";
import * as Repo from "../repositories/imovel.repo";
import { Imovel } from "../types/imovel/imovel.types";

export const imovelController = (app: Elysia) => {
  app
    .post("/imovel", ({ body }) => Repo.AddImovel(body as Imovel))
    .onAfterHandle(() => {
      "Imóvel criado com sucesso";
    });
};
