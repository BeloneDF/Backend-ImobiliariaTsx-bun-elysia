/*
  Warnings:

  - You are about to drop the `Filter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Filter" DROP CONSTRAINT "Filter_imovelId_fkey";

-- DropTable
DROP TABLE "Filter";
