-- CreateTable
CREATE TABLE "Foto" (
    "id" SERIAL NOT NULL,
    "id_imovel" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "imovelId" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
