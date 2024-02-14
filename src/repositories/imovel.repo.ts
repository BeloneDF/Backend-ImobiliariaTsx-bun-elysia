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
      console.error(error);
    }
  }
}

export async function FindAllImovel() {
  try {
    const data = await prisma.imovel.findMany();
    return {
      code: 200,
      data: data,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function GetImovelById(params: string) {
  try {
    const data = await prisma.imovel.findUnique({ where: { id: params } });
    return {
      message:
        data === null
          ? "Item encontrado, mas sem dados"
          : "Imovel encontrado com sucesso!",
      code: 202,
      data: data,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function DeleteImovel(params: string) {
  try {
    await prisma.imovel.delete({ where: { id: params } });
    return {
      message: "Imóvel deletado com sucesso!",
    };
  } catch (error) {
    console.error(error);
  }
}

export async function UpdateImovel(params: string, data: Imovel) {
  try {
    await prisma.imovel.update({
      where: { id: params },
      data: data,
    });
    return {
      message: "Imovel alterado com sucesso!",
      data: data,
    };
  } catch (error) {
    console.log(error);
  }
}
