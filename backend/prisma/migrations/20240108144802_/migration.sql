/*
  Warnings:

  - You are about to drop the column `createdDate` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `updatedDate` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "createdDate",
DROP COLUMN "updatedDate";
