import { Elysia, t } from "elysia";
import * as Repo from "../repositories/email.repo";
import { Email } from "../types/email/email.types";

export const EmailController = (app: Elysia) => {
  app.post("/sendEmail", ({ body }) => Repo.SendEmail(body as Email));
};