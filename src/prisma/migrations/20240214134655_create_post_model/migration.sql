/*
  Warnings:

  - Added the required column `filter` to the `Imovel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Imovel" ADD COLUMN     "filter" TEXT NOT NULL;
