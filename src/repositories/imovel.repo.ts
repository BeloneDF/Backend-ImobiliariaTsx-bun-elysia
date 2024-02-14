import { prisma } from "../db/prisma";
import { Imovel, ImovelSchema } from "../types/imovel/imovel.types";

export async function AddImovel(data: Imovel) {
  const result = ImovelSchema.safeParse({ data });

  if (!result.success) {
    console.error(result.error);
    return {
      message: "Algo deu errado",
      code: 504,
    };
  } else {
    try {
      await prisma.imovel.create({ data });
      return {
        message: "Imóvel criado com sucesso",
        code: 200,
        //data: data,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
