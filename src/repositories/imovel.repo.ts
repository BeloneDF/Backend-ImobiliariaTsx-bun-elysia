import { prisma } from "../db/prisma";
import { Imovel, ImovelSchema, Foto } from "../types/imovel/imovel.types";

export async function AddImovel(data: Imovel, fotos: Foto[]) {
  const result = ImovelSchema.safeParse({ data });

  if (!result.success) {
    console.error(result.error);
    return {
      message: "Algo deu errado",
      code: 504,
    };
  } else {
    try {
      const createdImovel = await prisma.imovel.create({ data });

      const createFotoPromises = fotos.map((foto) => {
        return prisma.foto.create({
          data: {
            ...foto,
            id_imovel: createdImovel.id,
            Imovel: { connect: { id: createdImovel.id } },
          },
        });
      });

      await Promise.all(createFotoPromises);
      return {
        message: "Imóvel criado com sucesso",
        code: 200,
        data: createdImovel,
      };
    } catch (error) {
      console.error(error);
      return {
        message: "Erro ao criar imóvel",
        code: 500,
      };
    }
  }
}

export async function FindAllImovel() {
  try {
    const data = await prisma.imovel.findMany({
      include: {
        fotos: true,
      },
    });
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
    const data = await prisma.imovel.findUnique({
      where: { id: params },
      include: {
        fotos: true,
      },
    });
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

export async function DeleteAllImovel() {
  try {
    await prisma.imovel.deleteMany();
    return {
      message: "Todos os Imóveis foram deletados",
      code: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      message: error,
      code: 500,
    };
  }
}
