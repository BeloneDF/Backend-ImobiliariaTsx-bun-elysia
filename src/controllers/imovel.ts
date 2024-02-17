import { Elysia, t } from "elysia";
import * as Repo from "../repositories/imovel.repo";
import { Imovel } from "../types/imovel/imovel.types";

export const imovelController = (app: Elysia) => {
  app.post("/imovel", ({ body }) => Repo.AddImovel(body as Imovel));
  app.get("/imovel", () => Repo.FindAllImovel());
  app.get("/imovel/:id", ({ params }) => Repo.GetImovelById(params.id));
  app.delete("/imovel/:id", ({ params }) => Repo.DeleteImovel(params.id));
  app.put("/imovel/:id", ({ params, body }) =>
    Repo.UpdateImovel(params.id, body as Imovel)
  );
};
