/*
  Warnings:

  - The primary key for the `Foto` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Foto" DROP CONSTRAINT "Foto_imovelId_fkey";

-- AlterTable
ALTER TABLE "Foto" DROP CONSTRAINT "Foto_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Foto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Foto_id_seq";

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
