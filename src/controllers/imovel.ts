import { Elysia, t } from "elysia";
import * as Repo from "../repositories/imovel.repo";
import { Imovel, Foto } from "../types/imovel/imovel.types";

export const imovelController = (app: Elysia) => {
  app.post(
    "/imovel",
    ({ body }: { body: { imovel: Imovel; fotos: Foto[] } }) => {
      try {
        return Repo.AddImovel(body.imovel, body.fotos);
      } catch (error) {
        console.error(error);
        throw new Error("Erro ao adicionar imóvel");
      }
    }
  );
  app.get("/imovel", () => Repo.FindAllImovel());
  app.get("/imovel/:id", ({ params }) => Repo.GetImovelById(params.id));
  app.delete("/imovel/:id", ({ params }) => Repo.DeleteImovel(params.id));
  app.delete("/imovel/all", () => Repo.DeleteAllImovel());

  app.put("/imovel/:id", ({ params, body }) =>
    Repo.UpdateImovel(params.id, body as Imovel)
  );
};
